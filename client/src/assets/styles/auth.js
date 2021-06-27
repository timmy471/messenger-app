import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContent: {
    width: "70%",
    margin: theme.spacing(0, "auto"),
  },
  text: {
    fontWeight: "bold",
  },
  endAdornment: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  formControl: {
    width: "100%",
  },
  label: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  ctaButton: {
    marginTop: theme.spacing(4)
  },
  [theme.breakpoints.down("sm")]: {
    formContent: {
      width: "90%",
    },
  },
}));

export { useStyles };
