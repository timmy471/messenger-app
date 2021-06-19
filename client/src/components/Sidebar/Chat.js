import React from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent, UnreadMessageBadge } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";

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
  const { classes, conversation, setActiveChat } = props;

  const { photoUrl, username, online } = conversation.otherUser;

  const handleClick = async () => {
    await setActiveChat(username);
  };

  return (
    <Box onClick={() => handleClick()} className={classes.root}>
      <BadgeAvatar
        photoUrl={photoUrl}
        username={username}
        online={online}
        sidebar={true}
      />
      <ChatContent conversation={props.conversation} />
      <UnreadMessageBadge unreadMessageCount={2} />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Chat));
