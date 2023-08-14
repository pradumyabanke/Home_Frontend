import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {

    const learnMore = ['designs','reviews','blogs','articles','professionals']
    const help = ['contact us','about us','careers','Terms of use','privacy policy','refund policy']
    // const social = ['FacebookIcon']
  return (
    <Box bgcolor={'#fefefe'}>
        <Box width={{xs:'95%',md:'90%'}} margin={'auto'} pt={'40px'} pb={{xs:'75px',md:'0px'}} >
<Box display={'grid'} gridTemplateColumns={{xs:'1fr',md:'2fr 1fr 1fr 1fr'}} rowGap={'15px'} pb={'20px'}>
    <Box  px={{xs:'5px',md:'15px'}}>
        
        <Typography
            color={"#343f52"}
            lineHeight={1.65}
            fontWeight={700}
            fontSize={"20px"}
            mb={"10px"}
          >
            About Home dalal
          </Typography>

          <Typography
            color={"#60697B"}
            lineHeight={1.65}
            fontWeight={500}
            fontSize={"18px"}
            
          >
           HomeDalal, the leading home services market network, connects homeowners with quality home improvement, repair and maintenance professionals to take care of all your home service needs.
          </Typography>
    </Box>

    <Box    px={'15px'}>
        
        <Typography
            color={"#343f52"}
            lineHeight={1.65}
            fontWeight={700}
            fontSize={"20px"}
            mb={"10px"}
          >
            Need help?
          </Typography>

          {help.map((title)=>{
    return (
        <Typography
            color={"#60697B"}
            key={title}
            lineHeight={1.65}
            fontWeight={500}
            fontSize={'"18px"'}
            textTransform={'capitalize'}
            py={'6px'}
            sx={{":hover":{
                color:'#ff914d',
                cursor:'pointer'
            }}}
          >
           {title}
          </Typography>

    )
})}
    </Box>

    <Box    px={'15px'}>
        
        <Typography
            color={"#343f52"}
            lineHeight={1.65}
            fontWeight={700}
            fontSize={"20px"}
            mb={"10px"}
          >
           Learn More
          </Typography>

{learnMore.map((title)=>{
    return (
        <Typography
        color={"#60697B"}
           key={title} 
        lineHeight={1.65}
        fontWeight={500}
        fontSize={'"18px"'}
        textTransform={'capitalize'}
        py={'6px'}
        sx={{":hover":{
            color:'#ff914d',
            cursor:'pointer'
        }}}
          >
           {title}
          </Typography>

    )
})}
          


    </Box>

    <Box    textAlign={'center'} px={'15px'}>
        
        <Typography
            color={"#343f52"}
            lineHeight={1.65}
            fontWeight={700}
            fontSize={"20px"}
            mb={"10px"}
          >
             Need Help Finding A Professional?
          </Typography>

          <Typography
            color={"#60697B"}
            lineHeight={1.65}
            fontWeight={500}
            fontSize={'"18px"'}
            
          >
           contact@homedalal.com
          </Typography>
    </Box>

</Box>
<Divider/>

<Box display={'flex'} justifyContent={{xs:'center',md:'space-between'}} rowGap={'20px'} flexWrap={'wrap'} paddingY={'30px'} >
<Typography color={"#60697B"}
            lineHeight={1.65}
            fontWeight={500}
            fontSize={'"18px"'}>© 2023 HomeDalal. All rights reserved.</Typography>

<Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
            columnGap={"1.5rem"}
            padding={"0rem 1.75rem"}
            sx={{ width: "max-content" }}>

              {/* {social.map((el)=>{
                return (
                  <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <`${el}`/>
            </Box>

                )
              })} */}
            <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <FacebookIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>

            <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <InstagramIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>

            <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <TwitterIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>

            <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <YouTubeIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>

            <Box
              width={"35px"}
              height={"35px"}
              borderRadius={"50%"}
              bgcolor={"#2e3438"}
              textAlign={"center"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#ff914d" },
              }}>
              <LinkedInIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>
          </Box>
</Box>
    </Box>
    

    </Box>
    
  )
}

export default Footer