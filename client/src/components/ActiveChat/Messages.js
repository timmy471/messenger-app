import React, { useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return (
          <Box key={message.id} ref={scrollRef}>
            {message.senderId === userId ? (
              <SenderBubble text={message.text} time={time} />
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
