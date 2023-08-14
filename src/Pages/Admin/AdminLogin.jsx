import React, { useState, useContext } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Snackbar,
  Alert,
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import FilledInput from "@mui/material/FilledInput"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom"
import axios from "axios"

import { AdminAuthContext } from "../Context/AdminAuthContext"

const AdminLogin = () => {
  const params = useParams()
  const navigate = useNavigate()
const location = useLocation()
console.log(location)
  const searchQuery = params.name
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const { adminLogin } = useContext(AdminAuthContext)
  // const history = useHistory();

  const initialState = {
    email: "",
    password: "",
  }

  const [loginData, setLoginData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [showSnackbar, setShowSnackbar] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))

    setShowSnackbar(false)
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    if (!loginData.email) {
      newErrors.email = "Email is required"
      isValid = false
    }

    if (!loginData.password) {
      newErrors.password = "Password is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(validateForm()){
      if(loginData.email==='admin@tadalal.com' && loginData.password==='admin@tadalal'){

        navigate(location.state.from || "/admin")
        adminLogin(loginData.email)

      } else{
        setShowSnackbar(true)
        console.log("adminLogin false")
      }
    }

    // if (validateForm()) {
    //   try {
    //     const response = await axios.post(
    //       `http://54.90.98.169/userLogin`,
    //       loginData
    //     )

    //     login(response.data)
    //     if ((response.data.msg = "User Login successfully")) {
    //       if (searchQuery) {
    //         navigate(`/services/${searchQuery}/selecttype`)
    //       } else {
    //         navigate("/")
    //       }
    //     } else {
    //       setShowSnackbar(true)
    //     }

    //     if (response.data.msg != "User Login successfully") {
    //       setShowSnackbar(true)
    //     }
    //   } catch (error) {
    //     setShowSnackbar(true)
    //     console.error("Login failed:", error)
    //   }
    // }
  }
  return (
    <Box>
      <Box width={"90%"} margin={"auto"} pt={"90px"} display={'flex'} justifyContent={'center'}>
        <Box width={{md:'400px'}} boxShadow={1} borderRadius={3} padding={"15px 20px"}>
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
          Admin not found or Invalid password
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default AdminLogin
