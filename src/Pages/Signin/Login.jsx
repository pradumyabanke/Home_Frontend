import React,{useState,useContext} from 'react';
import { Box,TextField,Button,Typography,Link, Snackbar, Alert } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {  useNavigate, useParams,useHistory } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const params = useParams();
  const navigate = useNavigate();

    const searchQuery = params.name
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const { login } = useContext(AuthContext);
  // const history = useHistory();


  const initialState = {
    email: '',
    password: ''
  };

  const [loginData, setLoginData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    // Clear the corresponding error when the user types in the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));

    setShowSnackbar(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!loginData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 



  const handleSubmit = async (e) => {
    e.preventDefault();

  

    if (validateForm()) {
      try {
        const response = await axios.post(
          `http://54.90.98.169/userLogin`,
          loginData
        );

        
        login(response.data);
        
        // if (response.data.data.email = "admin@tadalal") {
        //   navigate("/admin");
        //   return;
        // }
       
        if ((response.data.msg = "User Login successfully")) {

           
          if (searchQuery) {
            navigate(`/services/${searchQuery}/selecttype`)
          } else {
            navigate("/");
          }
          
        } else {
          
          setShowSnackbar(true);
        }


        
        if ((response.data.msg != "User Login successfully")) {
          setShowSnackbar(true);
        }


        
      } catch (error) {
        setShowSnackbar(true);
        console.error('Login failed:', error);
      }


     }
  };

  
  return (
    <Box>
      <Box width={"90%"} margin={"auto"} pt={"90px"}>
        <Box boxShadow={1} borderRadius={3} padding={"15px 20px"}>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="Email"
                margin="normal"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="standard"
                fullWidth
              />
              <FormControl
                sx={{ width: "100%", mb: "10px" }}
                variant="standard"
              >
                <TextField
                  label="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
              </FormControl>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  variant={"text"}
                  sx={{ color: "#FF914D", textTransform: "capitalize" }}
                >
                  Forgot Password
                </Button>
              </Box>
              <Button
                type="submit"
                variant={"contained"}
                sx={{
                  width: "100%",
                  bgcolor: "#FF914D",
                  mt: "16px",
                  textTransform: "capitalize",
                  ":hover": { bgcolor: "#FF914D" },
                }}
              >
                Sign In
              </Button>

              <Typography color={"#616a76"} fontSize={"16px"} mt={"6px"}>
                Don't have an account?{" "}
                <Link href="/signup">
                  {" "}
                  <Box
                    component={"span"}
                    color={"#009ed5"}
                    fontWeight={500}
                    sx={{
                      cursor: "pointer",
                      ":hover": { textDecoration: "underline" },
                    }}
                  >
                    Sign up
                  </Box>
                </Link>{" "}
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          severity="error"
          onClose={() => setShowSnackbar(false)}
          sx={{ width: "100%" }}
        >
          User not found or Invalid password
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login