import React from "react";
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
import { useStyles } from "../assets/styles/auth.js";

const Login = (props) => {
  const classes = useStyles();
  const { register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  return (
    <AuthLayout
      suggestionText="Already have an account?"
      routeActionText="Login"
      alternativeRoute={"login"}
    >
      <Container>
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

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapDispatchToProps)(Login);
