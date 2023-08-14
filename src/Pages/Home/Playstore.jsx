import React,{useEffect} from "react";
import { Box, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CheckIcon from '@mui/icons-material/Check';

import AOS from 'aos';
import "aos/dist/aos.css";

const Playstore = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box >
      <Box >
      <Box
        marginBottom={"8rem"}
        pr={"40px"}
        alignItems={"center"}
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      >
        <Box position={"relative"} 
    >
          <Box  
            position={"absolute"}
            width={"85%"}
            height={"90%"}
            bottom={"-2rem"}
            borderRadius={"10px"}
            right={"-1.8rem"}
            bgcolor={"#f1f5fd"}
            zIndex={1}
          ></Box>

          <Box position={"relative"} zIndex={100} data-aos="fade-up"
     data-aos-duration="3000" data-aos-once='true'>
            <img
              src="https://hometriangle.com/web/assets/images/find-expert.webp"
              width={"100%"}
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Box>

        <Box  data-aos="fade-down"
     data-aos-duration="3000" data-aos-once='true'
          px={{ xs: "10px", md: "35px" }}
          ml={{ xs: "10px", md: "94px" }}
          mr={{md:"30px"}} mt={{xs:'40px'}}  position="relative"
        >
          <Typography
            color={"#343f52"}
            lineHeight={1}
            fontWeight={700}
            fontSize={"40px"}
            my={{xs:'20px'}}
          >
            Find your expert.
          </Typography>

          <Typography
            color={"#60697B"}
            lineHeight={1.65}
            fontWeight={500}
            fontSize={"19px"}
            mb={"30px"}
          >
            With HomeTadalal you will find the best Professionals in the area,
            whatever your need.
          </Typography>

          <Box display={'flex'} mb={'9px'}>
            <Box>
                <Box mr="20px" textAlign={'center'} display={'flex'} color={'#fff'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:'#c1ff72'}} width={'45px'} height={'45px'} borderRadius={'100%'} >
                 <CheckIcon/>

                </Box>
            </Box>     
            <Box>
                <Typography color={'#343f52'} fontWeight={700}
            fontSize={"20px"}>Verified & vetted professionals</Typography>
                <Typography color={'#60697B'} fontWeight={500} mt={'8px'}
            fontSize={"16px"}>Get service from trusted and verified partner with professional skills and
experience.</Typography>
            </Box>        
          </Box>

          <Box display={'flex'} mb={'9px'}>
            <Box>
                <Box mr="20px" textAlign={'center'} display={'flex'} color={'#fff'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:'#c1ff72'}} width={'45px'} height={'45px'} borderRadius={'100%'} >
                 <CheckIcon/>

                </Box>
            </Box>     
            <Box>
                <Typography color={'#343f52'} fontWeight={700}
            fontSize={"20px"}>Matched to your Needs.</Typography>
                <Typography color={'#60697B'} fontWeight={500} mt={'8px'}
            fontSize={"16px"}>Avail service specific options according to your needs.</Typography>
            </Box>        
          </Box>

          <Box display={'flex'}>
            <Box>
                <Box mr="20px" textAlign={'center'} display={'flex'} color={'#fff'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:'#c1ff72'}} width={'45px'} height={'45px'} borderRadius={'100%'} >
                 <CheckIcon/>

                </Box>
            </Box>     
            <Box>
                <Typography color={'#343f52'} fontWeight={700}
            fontSize={"20px"}>Customer support at every step.</Typography>
                <Typography color={'#60697B'} fontWeight={500} mt={'8px'}
            fontSize={"16px"}>Support for every query at every step.</Typography>
            </Box>        
          </Box>
        </Box>
      </Box>
      <Box
        paddingBottom={"8rem"}
        alignItems={"center"}
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      >
        <Box  data-aos="fade-up"
     data-aos-duration="3000" data-aos-once='true'>
          <img
            src="https://hometriangle.com/web/assets/images/device-app1-transparent.webp"
            width={"100%"}
          />
        </Box>

        <Box px={{ xs: "20px", md: "50px" }} boxSizing={'border-box'}>
          <Typography
            color={"#343f52"}
            lineHeight={1.2}
            fontWeight={700}
            fontSize={"40px"}
          >
            The one app for all your home services
          </Typography>

          <Typography
            color={"#60697B"}
            lineHeight={1.5}
            fontWeight={500}
            fontSize={"18px"}
            my={"30px"}
          >
            Pick your professional from a wide price range, review their ratings
            and book your service, all in a few taps.
          </Typography>

          <Box  data-aos="zoom-in"
     data-aos-duration="3000" data-aos-once='true' display={{md:"flex",xs:'grid'}} gridTemplateColumns={'1fr,1fr'} columnGap={"10px"} rowGap={'10px'}>
            <img
              src="https://hometriangle.com/web/assets/images/icons/button-google-play.svg"
              width={"203px"}
              height={"60px"}
              style={{ borderRadius: "10px" }}
            />
            <img
              src="https://hometriangle.com/web/assets/images/icons/button-appstore.svg"
              width={"185px"}
              height={"60px"}
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Box>
      </Box>

      </Box>
 
    </Box>
  );
};

export default Playstore;
