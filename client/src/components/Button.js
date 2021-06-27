import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1.6, 6),
    fontSize: 18,
    transition: "all .7s cubic-bezier(.2,1,.22,1)",
    "&:hover": {
      transform: "translateY(-1.7px)",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 4),
      fontSize: 16,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  secondary: {
    backgroundColor: "#FFFFFF",
    color: theme.palette.primary.main,
    boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

const Button = (props) => {
  const classes = useStyles(props);
  const { onClick, children, type } = props;

  const btnClasses = clsx({
    [classes.button] : true,
    [classes.primary] : props.colorVariant === "primary",
    [classes.secondary] : props.colorVariant !== "primary"
})

  return (
    <MuiButton className={btnClasses} onClick={onClick} type={type}>
      {children}
    </MuiButton>
  );
};

export default Button;
