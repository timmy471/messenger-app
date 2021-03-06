import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: theme.spacing(1, 1, 0, 1)
  },
  profilePic: {
    height: 25,
    width: 25,
    marginTop: 10,
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const {
    time,
    showRead,
    text,
    otherUser: { photoUrl },
  } = props;

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      {showRead && <Avatar src={photoUrl} className={classes.profilePic} />}
    </Box>
  );
};

export default SenderBubble;
