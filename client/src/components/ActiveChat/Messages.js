import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, lastReadMessages } = props;

  const checkIfLastRead = (messageId) =>
    lastReadMessages?.filter((message) => message?.id === messageId).length > 0;

  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={index}
            text={message.text}
            time={time}
            otherUser={otherUser}
            showRead={checkIfLastRead(message.id)}
          />
        ) : (
          <OtherUserBubble
            key={index}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
