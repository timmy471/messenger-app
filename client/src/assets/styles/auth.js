import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContent: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    margin: "0 auto",
  },

  text: {
    fontWeight: "bold",
  },
  endAdornment: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  formControl: {
    marginTop: "2rem",
  },
  label: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    textAlign: "left",
    marginBottom: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    header: {
      margin: "3rem 0 5rem",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-end",
    },
    formContent: {
      width: "100%",
    },
  },
}));

export { useStyles };
