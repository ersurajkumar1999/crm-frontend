import React, { useContext, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from "formik";
import { loginSchema } from '../../../schemas/FormSchemas';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { userLogin } from '../../../services/ApiService';
import { ErrorMessage, SuccessMessage } from '../../../components/common/AlertMessages';
import { AuthContext } from '../../../contexts/AuthContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const UserLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [alertMessages, setAlertMessages] = useState({
    error: null,
    success: null
  });
  const initialValues = {
    email: "demo3030@gmail.com",
    password: "demo3030",
    rememberMe: false,
  };
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched, isSubmitting,
    values, resetForm
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
        setSubmitting(true);
        const response = await userLogin(data);
        if (response.status) {
          console.log("statusstatusstatusstatus", response.data.data);
          login(response.data.data);
          navigate('/profile');
          setAlertMessages({ error: null, success: response.data.message });
          resetForm();
        } else {
          setAlertMessages({ error: response?.data?.message, success: null });
        }
      } catch (error) {
        setAlertMessages({ error: error, success: null });
      } finally {
        setSubmitting(false);
      }
    },
  });
  const handleClearErrorMessage = () => setAlertMessages({ error: null, success: null });
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
        {alertMessages.error && (
          <ErrorMessage message={alertMessages.error} handlonCloseeMessage={handleClearErrorMessage} />
        )}
        {alertMessages.success && (
          <SuccessMessage message={alertMessages.success} handlonCloseeMessage={handleClearErrorMessage} />
        )}
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
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            inputProps={{}}
            error={touched.email && !!errors.password}
            helperText={touched.email && errors.password}
            disabled={isSubmitting}
            InputProps={{
              endAdornment: (
                <Button onClick={togglePasswordVisibility} disableRipple>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </Button>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={values.rememberMe}
                onChange={handleChange}
                name="rememberMe"
                color="primary"
                disabled={isSubmitting}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
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
