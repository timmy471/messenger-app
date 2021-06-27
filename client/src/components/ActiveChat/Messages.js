import React, { useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, lastReadMessages } = props;

  const checkIfLastRead = (messageId) =>
    lastReadMessages?.filter((message) => message?.id === messageId).length > 0;

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format("h:mm");

        return (
          <Box ref={scrollRef} key={index}>
            {message.senderId === userId ? (
              <SenderBubble
                text={message.text}
                time={time}
                otherUser={otherUser}
                showRead={checkIfLastRead(message.id)}
              />
            ) : (
              <OtherUserBubble
                text={message.text}
                time={time}
                otherUser={otherUser}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Messages;
