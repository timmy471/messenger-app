const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

    let conversation;
    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      conversation = await Conversation.findByPk(conversationId)
      //check if conversation exists
      if (conversation) {
        //compare users' ids for correct mapping and security
        if (conversation.user1Id !== senderId) {
          return res.sendStatus(403);
        }

        // check that conversation table with the conversationId has userId as sender
        const message = await Message.create({
          senderId,
          text,
          conversationId,
        });
        return res.json({ message, sender });
      } else {
        return res.sendStatus(404);
      }
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    conversation = await Conversation.findConversation(senderId, recipientId);

    if (!conversation) {
     //compare ids for security
      if(req.user.id !== sender.id){
        return res.sendStatus(403);
      }

       // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
