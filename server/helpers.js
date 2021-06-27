const { Conversation, Message } = require("./db/models");

const getLatestMessageText = (convo) =>
  convo.messages[convo.messages.length - 1].text;

const getLatestReadMessage = async (convoId, userId) => {
  try {
    const latestReadMessage = await Message.findAll({
      where: {
        readStatus: true,
        conversationId: convoId,
        senderId: userId,
      },
      limit: 1,
      order: [["createdAt", "DESC"]],
    });
    return latestReadMessage[0];
  } catch (err) {
    throw err;
  }
};

const updateMessagesStatus = async (data) => {
  try {
    const { userId, convoId } = data;
    await Message.update(
      { readStatus: true },
      {
        where: {
          recipientId: userId,
          conversationId: convoId,
          readStatus: false,
        },
      }
    );
    const newConvo = await Conversation.findOne({
      where: {
        id: convoId,
      },
      attributes: ["id", "user2Id", "user1Id"],
      order: [[Message, "createdAt", "ASC"]],
      include: [{ model: Message, order: ["createdAt", "ASC"] }],
    });

    const convoJSON = newConvo.toJSON();

    const lastReadOne = await getLatestReadMessage(convoId, newConvo.user2Id);
    const lastReadTwo = await getLatestReadMessage(convoId, newConvo.user1Id);
    convoJSON.latestMessageText = getLatestMessageText(convoJSON);
    convoJSON.lastReadMessages = [lastReadOne, lastReadTwo];
    convoJSON.unreadCount = await getUnreadCount(convoId, userId);

    return convoJSON;
  } catch (err) {
    throw err;
  }
};

const getUnreadCount = async (convoId, userId) => {
  try {
    const unreadCount = await Message.findAndCountAll({
      where: {
        readStatus: false,
        conversationId: convoId,
        recipientId: userId,
      },
    });
    return unreadCount.count;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getLatestMessageText,
  updateMessagesStatus,
  getLatestReadMessage,
  getUnreadCount,
};
