import React from "react";
import { connect } from "react-redux";
import {
  Grid,
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
          <Grid container spacing={2} className={classes.formContent}>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.text} align="left">
                Create an account.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <label htmlFor="username" className={classes.label}>
                  Username
                </label>
                <TextField aria-label="username" name="username" type="text" />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid
              item
              xs={12}
              align="center"
              className={classes.ctaButton}
            >
              <Button type="submit" colorVariant="primary">
                Create
              </Button>
            </Grid>
          </Grid>
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

export default connect(null, mapDispatchToProps)(Login)
