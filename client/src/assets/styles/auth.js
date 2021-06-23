import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
      margin: "3rem 2rem 5rem 0",
      display: "flex",
      justifyContent: "flex-end",
      gap: "3rem",
      alignItems: "center",
    },
  
    suggestionText: {
      color: theme.palette.secondary.main,
      fontSize: 18,
    },
  
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

  export { useStyles }