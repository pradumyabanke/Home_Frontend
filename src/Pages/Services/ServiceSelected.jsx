import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {Button,Typography,Box} from "@mui/material";

// import servicesData from '../../Data/ServecesData.json';
import { AuthContext } from "../Context/AuthContext";
import { HomeServicesContext } from "../Context/ServicesContext";



const ServiceSelected = () => {
  const params = useParams();
  const searchQuery = params.name;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const servicesData = useContext(HomeServicesContext);

  const [price, setPrice] = useState();

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

   const selectedService = servicesData.find(
     (service) => service.title === searchQuery
   )



 useEffect(() => {
   if (filteredServices.length > 0) {
     setPrice(filteredServices[0].minPrice);
   }
 }, [filteredServices]);
 

  
  const handleClick = () => {
    // localStorage.setItem("serviceRequested", JSON.stringify({ price: price}));
    if (user) {
      navigate(`/services/${searchQuery}/selecttype`);
    } else {
      navigate(`/services/${searchQuery}/signup`);
    }
  };

  return (
    <Box
      bgcolor={"#FF914D"}
      height={"105vh"}  
    >
      {selectedService && (
        <Box
          
          sx={{
            width: { xs: "100%", md: "80%" },
            margin: "auto",

            height: "100%",
            backgroundColor: "#FF914D",
            pt: { md: "150px" },
            pb: "10px",
            display: { md: "flex" },
            columnGap: "40px",
            alignContent: "center",
          }}
        >
          {/* hero section content */}

          <Box
            width={{ xs: "100%", md: "900px" }}
            height={{ xs: "230px", md: "500px" }}
            position={"relative"}
            textAlign={"left"}
            color={"#FFFFFF"}
            justifyContent={"center"}
            sx={{
              background: `url(${selectedService.image}) no-repeat`,
              backgroundSize: "contain",
              position: "relative",
              backgroundAttachment: { xs: "fixed", md: "scroll" },
            }}
          ></Box>
          <Box width={"90%"} margin={"auto"} mt={"10px"}>
            <Typography fontSize={"18px"} fontWeight={"500"} color={"#fff"}>
              {selectedService.title}
            </Typography>

            <Box my={"10px"} color={"#fff"}>
              <Typography lineHeight={1.1}>
                {selectedService.description}
              </Typography>
            </Box>

            <Box my={"10px"} color={"#fff"}>
              <ul>
                {selectedService.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </Box>

            {/* <Typography color={"#fff"} fontWeight={"700"}>
              What's Included?
            </Typography> */}

            {/* <Typography my={"10px"} color={"#fff"} fontWeight={"700"}>
              Cleaner's Nationality:
              <Box component="span" fontWeight={"400"}>
                Philippines
              </Box>
            </Typography> */}

            {/* <Box my={"10px"} color={"#fff"}>
              <Typography fontWeight={"700"} lineHeight={1.1}>
                This service includes general cleaning for accessible
                areas,including:
              </Typography>
              <Typography lineHeight={1.1}>-Dusting</Typography>
              <Typography lineHeight={1.1}>-sweeping</Typography>
              <Typography lineHeight={1.1}>-Mopping</Typography>
              <Typography>-Dish Washing</Typography>
              <Typography lineHeight={1.1}>
                -Cabinet and refrigerator cleaning
              </Typography>
            </Box> */}

            {/* <Box my={"10px"} color={"#fff"}>
              <Typography lineHeight={1.1} fontWeight={"700"}>
                Terms & Conditions:
              </Typography>
              <Typography lineHeight={1.1} variant="body1">
                -Kindly prepare all cleaning products before the maid's arrival
              </Typography>
              <Typography lineHeight={1.1} variant="body1">
                -Kindly pay attention toyour belongings as we are not
                responsible for missing or damaged items
              </Typography>
              <Typography lineHeight={1.1} variant="body1">
                -The visit is cancelled if driver's call is not answered
              </Typography>
            </Box> */}
            <Box mt={"20px"} mb={"80px"}>
              <Button
              pb={'40px'}
                onClick={handleClick}
                variant="contained"
                sx={{
                  width: "100%",
                  bgcolor: "#fff",
                  color: "black",
                  ":hover": { bgcolor: "#fff" },
                  display: { md: "none" },
                  textTransform: "Capitalize",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default ServiceSelected