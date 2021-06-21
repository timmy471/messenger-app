const { Conversation, Message } = require("./db/models");

const getLatestMessageText = (convo) =>
  convo.messages[convo.messages.length - 1].text;

const getLatestReadMessage = async (convoId, userId) => {
  try {
    const latestReadMessage = await Message.findAll({
      where: {
        status: true,
        conversationId: convoId,
        senderId: userId,
      },
      limit: 1,
      order: [["createdAt", "DESC"]],
    });

    return latestReadMessage[0];
  } catch (err) {
    console.log(err);
  }
};

const updateMessagesStatus = async (data) => {
  try {
    const { userId, convoId } = data;
    await Message.update(
      { status: true },
      {
        where: { recipientId: userId, conversationId: convoId, status: false },
      }
    );
    const newConvo = await Conversation.findOne({
      where: {
        id: convoId,
      },
      attributes: ["id"],
      order: [[Message, "createdAt", "ASC"]],
      include: [{ model: Message, order: ["createdAt", "ASC"] }],
    });

    const convoJSON = newConvo.toJSON();

    convoJSON.latestMessageText = getLatestMessageText(convoJSON);
    convoJSON.lastRead = await getLatestReadMessage(convoId, userId);

    return convoJSON;
  } catch (err) {
    console.log(err);
  }
};

const getUnreadCount = async (convoId, userId) => {
  try {
    const unreadCount = await Message.findAndCountAll({
      where: {
        status: false,
        conversationId: convoId,
        recipientId: userId,
      },
     
    });

    return unreadCount.count;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLatestMessageText,
  updateMessagesStatus,
  getLatestReadMessage,
  getUnreadCount,
};
