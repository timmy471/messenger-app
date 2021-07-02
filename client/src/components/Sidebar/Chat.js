import React from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent, UnreadMessageBadge } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { readMessages } from "../../store/utils/thunkCreators";
import { useSelector, useDispatch } from "react-redux";

const styles = {
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    paddingRight: 17,
    "&:hover": {
      cursor: "grab",
    },
  },
};

const Chat = (props) => {
  const { classes, conversation } = props;

  const { user, activeConversation } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { photoUrl, username, online, id: senderId } = conversation.otherUser;

  const unreadCount =
    conversation.unreadCount?.find((unread) => unread.id === user.id)
      .unreadCount || [];

  const handleClick = async () => {
    //do not dispatch if active conversation does not change
    if (activeConversation !== username) {
      await dispatch(setActiveChat(username));

      readMessages(user.id, conversation.id, senderId);
    }
  };

  return (
    <Box onClick={() => handleClick()} className={classes.root}>
      <BadgeAvatar
        photoUrl={photoUrl}
        username={username}
        online={online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} />
      {unreadCount > 0 && activeConversation !== username && (
        <UnreadMessageBadge unreadMessageCount={unreadCount} />
      )}
    </Box>
  );
};

export default withStyles(styles)(Chat);
