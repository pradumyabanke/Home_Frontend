import React, { useContext, useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Typography,
  Link,
  Alert,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";




import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AuthContext } from "../Context/AuthContext";

import {
  PhoneAndroid,
  Email,
  AccountCircle,
  BeachAccess,
  AccountCircleOutlined,
} from "@mui/icons-material";

const Profile = () => {
 
  const params = useParams();
  const searchQuery = params.name;
  const navigate = useNavigate();
 
  const { user } = useContext(AuthContext);
  const [data,setData] = useState({});


const userData = JSON.parse(localStorage.getItem("user"));
//   const handleClick = () => {
   
//     localStorage.removeItem("serviceRequested");

//     axios
//       .patch("https://lazy-ruby-shawl.cyclic.app/orders", data)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     navigate("/");
//   };


  


  const userDetails = [
    {
      icon: (
        <AccountCircleOutlined sx={{ color: "#305966", fontSize: "25px" }} />
      ),
      title: userData.data.first_name + " " + userData.data.last_name,
    },
    {
      icon: <PhoneAndroid sx={{ color: "#305966", fontSize: "25px" }} />,
      title: userData.data.mobile_number,
    },
    {
      icon: <Email sx={{ color: "#305966", fontSize: "25px" }} />,
      title: userData.data.email,
    },
  ];



  return (
    <Box pt={"80px"}>
      

{userDetails.map((el)=>{
    return (
      <Box key={el.title}>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          py="8px"
          width={"90%"}
          margin={"auto"}
        >
          <Box
            color={"#305966"}
            display={"flex"}
            alignItems={"center"}
            columnGap={"10px"}
          >
            
            {el.icon}
            <Typography lineHeight={1.1} fontWeight={"500"} >
              {el.title}
            </Typography>
          </Box>
          <Box>
            <NavigateNextIcon sx={{ color: "#305966", fontSize: "25px" }} />
          </Box>
        </Box>
        <Divider />
      </Box>
    );
})}
      
      <Divider />
    </Box>
  );
};

export default Profile;
