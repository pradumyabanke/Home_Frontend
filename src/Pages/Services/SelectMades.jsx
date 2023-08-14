import React, {useContext, useState,useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomeServicesContext } from "../Context/ServicesContext"
import axios from 'axios';

import InfoIcon from "@mui/icons-material/Info";

const SelectMades = () => {
  const params = useParams();
  const searchQuery = params.name;
  const navigate = useNavigate();
  const servicesData = useContext(HomeServicesContext)

  const [mades, setMades] = React.useState(1);
  const [hours, setHours] = React.useState(2);
  const [totalAmount, setTotalAmount] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({
    hours: 0,
    maid: 0,
    descriptions: "",
    subtotal: 0,
    service_name: searchQuery,
    status: "Pending",
  });

  

  const selectedService = servicesData.find(
    (service) => service.title === searchQuery
  )
console.log(selectedService)
  const price = JSON.parse(localStorage.getItem("serviceRequested"));

  useEffect(() => {
    if (formData.hours !== null && formData.maid !== null) {
      const calculatedAmount = formData.hours * formData.maid * price.price;
      setFormData((prevData) => ({
        ...prevData,
        subtotal: calculatedAmount, // Update totalAmount in the formData
      }));
    }
  }, [formData.hours, formData.maid]);

  const handleToggle = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNotesChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      descriptions: event.target.value,
    }));
  };

  

   const handleSubmit = () => {
    
    // localStorage.setItem('serviceRequested', JSON.stringify(formData));


    const existingFormData = JSON.parse(
      localStorage.getItem("serviceRequested")
    );
   
    const updatedFormData = {
      ...existingFormData,
...formData
    };

    
    localStorage.setItem("serviceRequested", JSON.stringify(updatedFormData));

    if(formData.hours == 0 || formData.maid == 0){
      setSnackbarOpen(true);
    } else {
      // axios
      //   .post("http://54.90.98.169/service-details", formData)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

        navigate(`/services/${searchQuery}/selectdate`)

    }     
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(2),
      border: "0",
      "&.Mui-disabled": {
        border: 0,
      },

      "&:not(first-of-type)": {
        borderRadius: theme.shape.borderRadius,
        width: "40px",
        height: "40px",
        border: "3px solid #ffa56c ",
        borderRadius: "8px",
        backgroundColor: "#ffa56c",
        color: "#fff",
      },
      "&.Mui-selected": {
        border: "3px solid #c1ff72",
      },
      "&:first-of-type": {
        borderRadius: "8px",
        marginLeft: "0px",
      },
      "&:not(:first-of-type)": {
        borderRadius: "8px",
      },
    },
  }));



  return (
    <Box height={"100vh"} pt={"70px"}>
      <Box
        height={"100%"}
        mt={"10px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box>
          <Box mx={"15px"} mb={"15px"}>
            <Typography color={"#305966"}>
              How many maids would you like?
            </Typography>

            <StyledToggleButtonGroup
              fullWidth
              size="large"
              // value={mades}
              value={formData.maid}
              exclusive
              // onChange={handleMades}
              onChange={(event, value) => handleToggle("maid", value)}
              aria-label="select mades"
            >
              <ToggleButton value="1" aria-label="1">
                1
              </ToggleButton>
              <ToggleButton value="2" aria-label="2">
                2
              </ToggleButton>
              <ToggleButton value="3" aria-label="3">
                3
              </ToggleButton>
              <ToggleButton value="4" aria-label="4">
                4
              </ToggleButton>
              <ToggleButton value="5" aria-label="5">
                5
              </ToggleButton>
              <ToggleButton value="6" aria-label="6">
                6
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>

          <Divider />

          <Box mx={"15px"} mt={"15px"} mb={"15px"}>
            <Typography color={"#305966"}>
              How many hours of the service would you like?
            </Typography>

            <Box overflow={"auto"}>
              <StyledToggleButtonGroup
                fullWidth
                size="large"
                // value={hours}
                value={formData.hours}
                exclusive
                onChange={(event, value) => handleToggle("hours", value)}
                // onChange={handleHours}
                aria-label="select hours"
              >
                <ToggleButton value="2" aria-label="2">
                  2
                </ToggleButton>
                <ToggleButton value="3" aria-label="3">
                  3
                </ToggleButton>
                <ToggleButton value="4" aria-label="4">
                  4
                </ToggleButton>
                <ToggleButton value="5" aria-label="5">
                  5
                </ToggleButton>
                <ToggleButton value="6" aria-label="6">
                  6
                </ToggleButton>
                <ToggleButton value="7" aria-label="7">
                  7
                </ToggleButton>
                <ToggleButton value="8" aria-label="8">
                  8
                </ToggleButton>
              </StyledToggleButtonGroup>
            </Box>
          </Box>
          <Divider />
          <Box mx={"15px"} mt={"15px"} mb={"15px"}>
            <Typography color={"#305966"}>
              Anything else you'd like us to know?
            </Typography>
            <TextField
              id="filled-textarea"
              placeholder="Add additional note here"
              multiline
              variant="outlined"
              rows={3}
              value={formData.descriptions}
              onChange={handleNotesChange}
              sx={{ width: "100%" }}
            />
          </Box>

          <Divider />
          <Box mx={"15px"} mt={"15px"} mb={"15px"}>
            <Box
              display={"flex"}
              borderRadius={"5px"}
              bgcolor={"lightgray"}
              alignItems={"center"}
              padding={"4px"}
            >
              <IconButton>
                <InfoIcon sx={{ color: "#305966" }} />
              </IconButton>

              <Typography lineHeight={1.1} color={"#305966"}>
                Free cancellation until 24 hours before the start of your
                booking
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"90%"}
            margin={"auto"}
            mt={"10px"}
            mb={"10px"}
          >
            <Typography
              lineHeight={1.1}
              variant="body1"
              sx={{ width: "50%", display: { md: "none" } }}
            >
              Subtotal
            </Typography>

            <Typography
              lineHeight={1.1}
              variant="body1"
              color={"#FF914D"}
              fontWeight={"600"}
              sx={{ width: "50%", display: { md: "none" } }}
              py="8px"
              textAlign={"right"}
            >
              SAR {formData.subtotal}.00
            </Typography>
          </Box>
          <Divider />
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          width={"90%"}
          margin={"auto"}
          mt={"10px"}
          mb={"50px"}
        >
          <Button
            onClick={handleSubmit}
            // href={`/services/${searchQuery}/signup`}
            variant="contained"
            sx={{
              width: "100%",
              textTransform: "Capitalize",
              display: { md: "none" },
            }}
          >
            Next
          </Button>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please select the number of hours and maids both.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectMades;
