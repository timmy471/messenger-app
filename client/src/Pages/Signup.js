import React, { useState } from "react";
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
import { register } from "../store/utils/thunkCreators";
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
    textAlign: "left",
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
  const { user, register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthLayout>
      <Container>
        <Box className={classes.header}>
          <Typography className={classes.suggestionText}>
            Already have an account?
          </Typography>
          <Button
            colorVariant="secondary"
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </Box>

        <form onSubmit={handleRegister}>
          <Box align="center" className={classes.formContent}>
            <Typography variant="h5" className={classes.text} align="left">
              Create an account.
            </Typography>

            <FormControl className={classes.formControl}>
              <label htmlFor="username" className={classes.label}>
                Username
              </label>
              <TextField aria-label="username" name="username" type="text" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <label htmlFor="email" className={classes.label}>
                E-mail address
              </label>
              <TextField
                aria-label="e-mail address"
                type="email"
                name="email"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <TextField
                aria-label="password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
              />
            </FormControl>
            <Box marginTop={5}>
              <Button type="submit" colorVariant="primary">
                Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);