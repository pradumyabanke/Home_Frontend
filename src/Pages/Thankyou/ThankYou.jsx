import React,{useEffect} from "react"
import { Typography, Box, Link } from "@mui/material"
import { useHistory,useNavigate } from "react-router-dom"

import happyLogo from "../../Assets/Images/happy.png"

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/")
      }, 4000)

      return () => clearTimeout(timer)
    }, [])
  return (
    <Box width={'85%'} margin={'auto'}>
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box alignItems={"center"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img src={happyLogo} width={"60%"} alt="logo" />
          </Box>
          <Typography
            color={"#305966"}
            fontWeight={700}
            fontStyle={"italic"}
            fontSize={"28px"}
            textAlign={"center"}
          >
            Thank you
          </Typography>
          <Typography
            lineHeight={1.1}
            
            color={"#305966"}
            fontWeight={"500"}
            textAlign={"center"}
            fontSize={"12px"}
          >
            Your service request has been confirmed,please check orders page
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ThankYou
