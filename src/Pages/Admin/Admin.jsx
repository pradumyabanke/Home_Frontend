import React, { useContext } from "react"
import { Box, Button, Link, Typography } from "@mui/material";
import { AdminAuthContext } from "../Context/AdminAuthContext"

const Admin = () => {
const { adminLogout } = useContext(AdminAuthContext)
  const handleLogout = ()=>{
adminLogout()
  }

  return (
    <Box pt={"100px"}>
      <Box width={'90%'} margin={'auto'} display={'flex'} justifyContent={'flex-end'}>
        <Button
          sx={{
            color: "#343f52",
            borderRadius: "0.625rem",
            fontSize: "1rem",
            textTransform: "capitalize",
            fontWeight: "500",
            boxSizing: "border-box",
            transition: "all 300ms ease 0s",
          }}
          size={"large"}
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        columnGap={"50px"}
        pb={"100px"}
        alignItems={"center"}
      >
        <Typography
          fontWeight={600}
          color={"#305966"}
          fontSize={"35px"}
          textAlign={"center"}
          mb={"32px"}
        >
          Welcome to Admin dashboard
        </Typography>
        <Box display={"flex"} columnGap={{ md: "50px", xs: "20px" }}>
          <Link href="/admin/editservices" color="inherit" underline="none">
            {" "}
            <Button
              sx={{
                display: "block",

                width: "10rem",

                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "10px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover": { background: "#9acc5b" },
              }}
              size={"large"}
              variant="contained"
            >
              Edit Services
            </Button>{" "}
          </Link>

          <Link href="/admin/orders" color="inherit" underline="none">
            {" "}
            <Button
              sx={{
                display: "block",

                width: "10rem",

                color: "#343f52",
                borderRadius: "0.625rem",
                padding: "10px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
                boxSizing: "border-box",
                background: "#C1FF72",
                transition: "all 300ms ease 0s",
                ":hover": { background: "#9acc5b" },
              }}
              size={"large"}
              variant="contained"
            >
              Orders
            </Button>{" "}
          </Link>
        </Box>

        <Box
          color={"#fff"}
          rowGap={"30px"}
          textAlign={"center"}
          fontSize={"700"}
          display={"grid"}
          columnGap={"20px"}
          mt={"60px"}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
        >
          <Box
            bgcolor={"#3c3d40"}
            fontSize={"25px"}
            padding={"20px"}
            borderRadius={"20px"}
            boxShadow={5}
          >
            Total services
            <Box>40+</Box>
          </Box>

          <Box
            bgcolor={"#3c3d40"}
            fontSize={"25px"}
            padding={"20px"}
            borderRadius={"20px"}
            boxShadow={5}
          >
            Services completed
            <Box>1000+</Box>
          </Box>

          <Box
            bgcolor={"#3c3d40"}
            fontSize={"25px"}
            padding={"20px"}
            borderRadius={"20px"}
            boxShadow={5}
          >
            Services pending
            <Box>32</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Admin