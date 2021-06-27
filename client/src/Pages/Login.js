import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  FormControl,
  TextField,
  Container,
  Grid,
} from "@material-ui/core";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { login } from "./../store/utils/thunkCreators";
import { useStyles } from "../assets/styles/auth.js";

const Login = (props) => {
  const classes = useStyles();
  const { login } = props;

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await login({ email, password });
  };

  return (
    <AuthLayout
      suggestionText="Don't have an account?"
      routeActionText="Create account"
      alternativeRoute={"register"}
    >
      <Container>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2} className={classes.formContent}>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.text} align="left">
                Welcome Back!
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <label htmlFor="E-mail address" className={classes.label}>
                  Email
                </label>
                <TextField
                  aria-label="email address"
                  name="email"
                  type="email"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid
              item
              xs={12}
              mt-4
              align="center"
              className={classes.ctaButton}
            >
              <Button type="submit" colorVariant="primary">
                Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

// export default connect(mapDispatchToProps)(Login);
export default connect(null, mapDispatchToProps)(Login)
