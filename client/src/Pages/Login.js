import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Container,
} from "@material-ui/core";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { login } from "./../store/utils/thunkCreators";
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

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await login({ email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthLayout>
      <Container>
        <Box className={classes.header}>
          <Typography className={classes.suggestionText}>
            Don't have an account?
          </Typography>
          <Button
            colorVariant="secondary"
            onClick={() => history.push("/register")}
          >
            Create account
          </Button>
        </Box>

        <form onSubmit={handleLogin}>
          <Box align="center" className={classes.formContent}>
            <Typography variant="h5" className={classes.text} align="left">
              Welcome Back!
            </Typography>

            <FormControl
              margin="normal"
              required
              className={classes.formControl}
            >
              <label htmlFor="E-mail address" className={classes.label}>
                Password
              </label>
              <TextField aria-label="email address" name="email" type="email" />
            </FormControl>
            <FormControl
              margin="normal"
              required
              className={classes.formControl}
            >
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <TextField
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <Typography className={classes.endAdornment}>
                      Forgot?
                    </Typography>
                  ),
                }}
              />
            </FormControl>
            <Box marginTop={7}>
              <Button type="submit" colorVariant="primary">
                Login
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </AuthLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
