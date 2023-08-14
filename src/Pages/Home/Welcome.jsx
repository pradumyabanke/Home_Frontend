import { Box, Typography,Button } from "@mui/material";
import React from "react";
import { House,Percent,AccountCircle,BeachAccess } from "@mui/icons-material";
import { useParams } from "react-router-dom";




const Welcome = () => {
  const params = useParams();
    const searchQuery = params.name
  const process = [
    {
      title: "Sign up",
      icon: <AccountCircle sx={{ fontSize: "60px" }} />,
      detail: "Choose your location and register your account.",
    },
    {
      title: "Benifit Now",
      icon: <Percent sx={{ fontSize: "60px" }} />,
      detail: "Sign up now to activate your special discount.",
    },
    {
      title: "Book Your Service",
      icon: <House sx={{ fontSize: "60px" }} />,
      detail: "Choose a service at your convinient time and date.",
    },
    {
      title: "Sit Back and Realax",
      icon: <BeachAccess sx={{ fontSize: "60px" }} />,
      detail: "Enjoy your day while we take care of your time consuming tasks!",
    },
  ];
  return (
    <Box height={"100vh"} bgcolor={"#FF914D"}>
      <Box width={"85%"} height={'75%'} margin={"auto"} pt={"90px"} display={'flex'} flexDirection={'column'} alignItems={'space-beteen'} justifyContent={'space-between'}>
        <Box>
        <Typography color={"#fff"} fontSize={"30px"} fontWeight={700}>
          Welcome to Tadalal
        </Typography>

        {process.map((el) => {
          return (
            <Box
              color={"#fff"}
              display={"flex"}
              columnGap={"25px"}
              key={el.title}
              alignItems={"center"}
              pt={'10px'}
            >
              <Box startIcon>{el.icon}</Box>
              <Box>
                <Typography fontSize={"20px"} fontWeight={300}>
                  {el.title}
                </Typography>
                <Typography
                  
                  fontSize={"18px"}
                  fontWeight={400}
                >
                  {el.detail}
                </Typography>
              </Box>
            </Box>
          );
        })}

        </Box>
        

        <Button href={`/services/${searchQuery}`} variant={'contained'}  sx={{width:'100%',bgcolor:'#fff',color:'black',textTransform:'capitalize',fontSize:'18px',fontWeight:500,":hover":{bgcolor:'#fff'}}} >Continue</Button>
      </Box>
    </Box>
  );
};

export default Welcome;
