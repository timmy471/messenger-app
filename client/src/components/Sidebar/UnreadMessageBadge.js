import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "#FFFFFF",
    backgroundColor: "#3A8DFF",
    height: 24,
    padding: (props) => (props.unreadMessageCount > 9 ? "9px 12px" : 8),
    borderRadius: (props) => (props.unreadMessageCount > 9 ? 40 : "50%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
  },
}));

const UnreadMessageBadge = (props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Typography className={classes.count}>
        {props.unreadMessageCount}
      </Typography>
    </Box>
  );
};

export default UnreadMessageBadge;
