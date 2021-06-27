import { Grid, Box, Hidden, Typography } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import authBgImage from "../assets/images/bg-img.png";
import bubbleImg from "../assets/images/bubble.svg";
import Button from "../components/Button";

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
  header: {
    margin: theme.spacing(6, 4, 10, 0),
    display: "flex",
    justifyContent: "flex-end",
    gap: "3rem",
    alignItems: "center",
  },

  suggestionText: {
    color: theme.palette.secondary.main,
    fontSize: 18,
  },

  [theme.breakpoints.down("sm")]: {
    header: {
      margin: theme.spacing(5, 2, 10, 0),
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-end",
    },
    formContent: {
      width: "100%",
    },
  },
}));

const AuthLayout = (props) => {
  const classes = useStyles();

  const { suggestionText, alternativeRoute, routeActionText, user } = props;
  const history = useHistory();

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={5} className={classes.authImage}>
        <Hidden xsDown>
          <Box className={classes.authImageContent}>
            <img src={bubbleImg} width="80" alt="message" />
            <Box mt={7} className={classes.authImageText}>
              <Typography variant="h4" className={classes.authImageText}>
                Converse with anyone with any language
              </Typography>
            </Box>
          </Box>
        </Hidden>
      </Grid>

      <Grid item xs={12} sm={7}>
        <Box className={classes.header}>
          <Typography className={classes.suggestionText}>
            {suggestionText}
          </Typography>
          <Button
            colorVariant="secondary"
            onClick={() => history.push(`/${alternativeRoute}`)}
          >
            {routeActionText}
          </Button>
        </Box>
        {props.children}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AuthLayout);
