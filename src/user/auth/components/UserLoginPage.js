import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress component

import { useFormik } from "formik";
import { loginSchema } from '../../../schemas/FormSchemas';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { userLogin } from '../../../services/ApiService';

const UserLoginPage = () => {
  const initialValues = {
    email: "spandev23@gmail.com",
    password: "spandev23@",
    rememberMe: false,
  };
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting, // Capture isSubmitting from useFormik
    values,
  } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const data = {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe
      };
      try {
        // Start submitting
        setSubmitting(true);
        const userInfo = await userLogin(data);
        console.log("data==>", userInfo);
        // Proceed with form submission...
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        // Finish submitting
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="outlined-adornment-email-login"
            type="email"
            value={values.email}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email Address / Username"
            inputProps={{}}
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            error={touched.password && !!errors.email}
            helperText={touched.password && errors.email}
            disabled={isSubmitting} // Disable field while submitting
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            inputProps={{}}
            error={touched.email && !!errors.password}
            helperText={touched.email && errors.password}
            disabled={isSubmitting} // Disable field while submitting
          />
          <FormControlLabel
            control={
              <Checkbox
                value={values.rememberMe}
                onChange={handleChange}
                name="rememberMe"
                color="primary"
                disabled={isSubmitting} // Disable checkbox while submitting
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'} {/* Show loader when submitting */}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/signup" component={Link} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default UserLoginPage;
