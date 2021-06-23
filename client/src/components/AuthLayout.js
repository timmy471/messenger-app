import { Grid, Box, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import authBgImage from "../assets/images/bg-img.png";
import bubbleImg from "../assets/images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("sm")]: {
    root: {
      height: "100vh",
    },
  },

  authImage: {
    backgroundImage: `linear-gradient(
        0deg
        , rgb(58, 141, 255, 1), rgb(58, 141, 255, 0.5)), url(${authBgImage});`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  chatIcon: {
    fontSize: "5rem",
    fontWeight: 200,
  },
  authImageText: {
    lineHeight: "55px",
  },
  authImageContent: {
    width: "70%",
  },
}));

const AuthLayout = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={5} className={classes.authImage}>
        <Hidden xsDown>
          <Box className={classes.authImageContent}>
            <img src={bubbleImg} width="80" />
            <Box mt={7} className={classes.authImageText}>
              <Typography variant="h4" className={classes.authImageText}>
                Converse with anyone with any language
              </Typography>
            </Box>
          </Box>
        </Hidden>
      </Grid>

      <Grid item xs={12} sm={7}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
