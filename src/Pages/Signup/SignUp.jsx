import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Autocomplete,
  Alert,
  Snackbar,
  Select,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const params = useParams();
  const navigate = useNavigate();

  const searchQuery = params.name;

  const initialState = {
    first_name: "",
    last_name: "",
    country_code: "",
    mobile_number: "",
    email: "",
    password: "",
    address: "",
  };

  const [signupData, setSignupData] = useState(initialState);

  const [errors, setErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
   
    const { name, value } = e.target;

    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setShowSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setShowSnackbar(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://54.90.98.169/userRegistration",   
        signupData
      );

       console.log(response);
    } catch (error) {
      console.error("Signup failed:", error);
setSnackbarSeverity("error")
setSnackbarMessage("Something went wrong,Email or mobile already exists")
      setShowSnackbar(true)
      setSignupData(initialState)
      return;
    }

    
    setSignupData(initialState);
    
    if (searchQuery) {
      navigate(`/services/${searchQuery}/login`);
    } else {
      navigate("/login");
    }

   
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
    setSnackbarMessage("");
  };

  const isFormValid = () => {
    if (
      signupData.first_name === "" ||
      signupData.last_name === "" ||
      signupData.mobile_number === "" ||
      signupData.email === "" ||
      signupData.password === "" ||
      signupData.address === ""
    ) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in all fields.");
      return false;
    }

    if (signupData.password.length < 5) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Password should be at least 5 characters long.");
      return false;
    }

    if (!/^\d{10}$/.test(signupData.mobile_number)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Mobile number should be exactly 10 digits.");
      return false;
    }
    if (signupData.country_code === "" || signupData.mobile_number === "") {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Please select a country code and enter the mobile number."
      );
      return false;
    }

    return true;
  };

  const handleCountryCodeChange = (event, value) => {
    if (value) {
      setSignupData((prevData) => ({
        ...prevData,
        country_code: value.code,
      }));
    } else {
      setSignupData((prevData) => ({
        ...prevData,
        country_code: "",
      }));
    }
    setShowSnackbar(false);
  };

  const handleClick = () => {
    if (searchQuery) {
      navigate(`/services/${searchQuery}/login`);
    } else {
      navigate("/login");
    }
  };

  const countryCodes = [
    { code: "+1", label: "+1 (USA)" },
    { code: "+44", label: "+44 (UK)" },
    { code: "+91", label: "+91 (India)" },
    { code: "+61", label: "+61 (Australia)" },
    { code: "+33", label: "+33 (France)" },
    { code: "+49", label: "+49 (Germany)" },
    { code: "+81", label: "+81 (Japan)" },
    { code: "+966", label: "+966 (Saudi Arabia)" },
    { code: "+971", label: "+971 (United Arab Emirates)" },
    { code: "+962", label: "+962 (Jordan)" },
    { code: "+973", label: "+973 (Bahrain)" },
    { code: "+965", label: "+965 (Kuwait)" },
    { code: "+968", label: "+968 (Oman)" },
    { code: "+974", label: "+974 (Qatar)" },
    { code: "+963", label: "+963 (Syria)" },
    { code: "+962", label: "+962 (Lebanon)" },
  ];
  const selectedCountry = countryCodes.find(
    (option) => option.code === signupData.country_code
  );
  return (

    <Box>
      <Box width={"90%"} margin={"auto"} pt={"90px"}>
        <Box boxShadow={1} borderRadius={3} padding={"15px 20px"}>

          <Snackbar
            open={showSnackbar}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>

          <Box>
            <form onSubmit={handleSubmit}>
              <Box display={"flex"} columnGap={"10px"} mb={"10px"}>

                <TextField
                  id="name"
                  label="First Name"
                  variant="standard"
                  name="first_name"
                  value={signupData.first_name}
                  onChange={handleInputChange}
                />

                <TextField
                  id="last_name"
                  label="Last Name"
                  variant="standard"
                  name="last_name"
                  value={signupData.last_name}
                  onChange={handleInputChange}
                />

              </Box>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                value={signupData.email}
                onChange={handleInputChange}
                sx={{ width: "100%", mb: "10px" }}
              />
              <FormControl
                sx={{ width: "100%", mb: "10px" }}
                variant="standard"
              >

                <TextField
                  label="Password"
                  name="password"
                  value={signupData.password}
                  onChange={handleInputChange}
                  variant="standard"
                  fullWidth
                  margin="normal"
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

                <FormHelperText id="component-helper-text">
                  Minimum of 5 characters.
                </FormHelperText>
              </FormControl>

              <Box display={"flex"} columnGap={"5px"}>
                <Autocomplete
                  variant="standard"
                  sx={{ width: "50%" }}
                  options={countryCodes}
                  getOptionLabel={(option) => option.label}
                  value={selectedCountry || null}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      name="country_code"
                      variant="standard"
                      value={signupData.country_code}
                      onChange={handleCountryCodeChange}
                      fullWidth
                    />
                  )}
                  onChange={(event, value) =>
                    handleCountryCodeChange(event, value)
                  }
                />

                {/* <Autocomplete
      id="country-select-demo"
      sx={{ width: 200 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => +option.phone}
      renderOption={(props, option) => (
        <Box component="li" sx={{ width:'130px' }} {...props}>
          
            +{option.phone} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="country"
          variant="standard"
          inputProps={{
            ...params.inputProps,
            
          }}
          sx={{textAlign:'right'}}
        />
      )}
    /> */}

                <TextField
                  id="mobile"
                  inputProps={{
                    maxLength: 10,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  label="Mobile Number"
                  variant="standard"
                  name="mobile_number"
                  value={signupData.mobile_number}
                  onChange={handleInputChange}
                  sx={{ width: "100%", mb: "10px" }}
                />
              </Box>
              <Typography
                textAlign={"center"}
                color={"#616a76"}
                fontSize={"12px"}
              >
                We use your number and e-mail to send you order confirmation and
                receipts
              </Typography>

              <TextField
                id="adress"
                label="Adress"
                variant="standard"
                name="address"
                value={signupData.address}
                onChange={handleInputChange}
                sx={{ width: "100%", mb: "10px" }}
              />

              <Box display={"flex"} justifyContent={"flex-end"}></Box>

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
                Sign Up
              </Button>

              <Typography
                mt={"10px"}
                color={"#616a76"}
                textAlign={"center"}
                fontSize={"12px"}
              >
                By Signing up you agree to the
              </Typography>
              <Typography
                textAlign={"center"}
                color={"#FF914D"}
                fontSize={"12px"}
              >
                Terms & conditions.
              </Typography>

              <Typography color={"#616a76"} fontSize={"16px"} mt={"6px"}>
                Already have an account?{" "}
                <Box
                  onClick={handleClick}
                  component={"span"}
                  color={"#009ed5"}
                  fontWeight={500}
                  sx={{
                    cursor: "pointer",
                    ":hover": { textDecoration: "underline" },
                  }}
                >
                  Sign In
                </Box>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
