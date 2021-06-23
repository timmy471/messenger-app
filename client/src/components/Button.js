import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: (props) =>
      props.colorVariant === "primary" ? theme.palette.primary.main : "#FFFFFF",
    color: (props) =>
      props.colorVariant !== "primary" ? theme.palette.primary.main : "#FFFFFF",
    boxShadow: (props) =>
      props.colorVariant !== "primary"
        ? "0px 0px 4px 4px rgba(0, 0, 0, 0.1)"
        : "",
    padding: "0.8rem 3rem",
    fontSize: 18,
    transition: `all .7s cubic-bezier(.2,1,.22,1)`,
    "&:hover": {
      transform: `translateY(-1.7px)`,
      backgroundColor: (props) =>
        props.colorVariant === "primary"
          ? theme.palette.primary.main
          : "#FFFFFF",
      color: (props) =>
        props.colorVariant !== "primary"
          ? theme.palette.primary.main
          : "#FFFFFF",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 2rem",
      fontSize: 16,
    },
  },
}));

const Button = (props) => {
  const classes = useStyles(props);
  const { onClick, children, type } = props;

  return (
    <MuiButton className={classes.button} onClick={onClick} type={type}>
      {children}
    </MuiButton>
  );
};

export default Button;
