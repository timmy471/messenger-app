import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "50%",
    color: "#FFFFFF",
    backgroundColor: "#3A8DFF",
    height: 24,
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
  },
}));

const UnreadMessageBadge = ({ unreadMessageCount }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.count}>{unreadMessageCount}</Typography>
    </Box>
  );
};

export default UnreadMessageBadge;
