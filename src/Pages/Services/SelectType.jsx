import React, { useContext, useState, useEffect } from "react"
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
} from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { styled } from "@mui/material/styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { HomeServicesContext } from "../Context/ServicesContext"
import axios from "axios"

import InfoIcon from "@mui/icons-material/Info"

const SelectType = () => {
  const params = useParams()
  const searchQuery = params.name
  const navigate = useNavigate()
  const servicesData = useContext(HomeServicesContext)

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const [descriptions,setDescriptions] = useState("")
  const [price, setPrice] = useState(0)

 

  const handleTypeSelect = (type) => {
    setSelectedType(type)
    setSelectedValue(null)
    setPrice(0)
  }

  const handleValueSelect = (value) => {
    setSelectedValue(value)
    setPrice(value.price)
  }


  const handleDescriptionsChange = (e)=>{

setDescriptions(e.target.value)
  }

  const selectedService = servicesData.find(
    (service) => service.title === searchQuery
  )

  
 useEffect(() => {
   
   if (selectedService) {
     setPrice(selectedService.min_Price)
   }
 }, [selectedService])
  
  

  


  const handleSubmit = () => {
    // localStorage.setItem('serviceRequested', JSON.stringify(formData));

    const existingFormData = JSON.parse(
      localStorage.getItem("serviceRequested")
    )

    
      if (selectedService.questions.length > 0 && selectedValue === null) {
        setSnackbarOpen(true)
      } else {
        
        const selectedData = {
          service_name: selectedService.title,
          type_plan: selectedType,
          size_quantity: selectedValue ? selectedValue.value : "",
          subtotal: price,
          descriptions: descriptions,
          status: "Pending",
        }

        const updatedFormData = {
          ...existingFormData,
          ...selectedData,
        }

        localStorage.setItem(
          "serviceRequested",
          JSON.stringify(updatedFormData)
        )

        navigate(`/services/${searchQuery}/selectdate`)
      }     
 
  }


   const handleSnackbarClose = () => {
     setSnackbarOpen(false)
   }
  

 

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
            {selectedService && (
              <Box>
                <Typography color={"#305966"}>
                  {selectedService.types?.question}
                </Typography>

                <Box className="options-container">
                  {selectedService.types &&
                  selectedService.types.options.length > 0
                    ? selectedService.types?.options.map((type, index) => (
                        
                          <Button
                            key={index}
                            variant={
                              selectedType === type ? "contained" : "outlined"
                            }
                            onClick={() => handleTypeSelect(type)}
                            color="secondary"
                            sx={{ margin: "6px",textTransform:'unset' }}
                          >
                            {type}
                          </Button>
                       
                      ))
                    : // Display options directly if no types are available
                      selectedService.questions?.map((question, index) => (
                        <Box key={index}>
                          <Typography color={"#305966"} gutterBottom>
                            {question.question}
                          </Typography>
                          {question.options.map((option, optionIndex) => (
                            <Button
                              key={optionIndex}
                              variant={
                                selectedValue === option
                                  ? "contained"
                                  : "outlined"
                              }
                              onClick={() => handleValueSelect(option)}
                              color="secondary"
                              sx={{ margin: "6px" }}
                            >
                              {option.value}
                            </Button>
                          ))}
                        </Box>
                      ))}
                </Box>
              </Box>
            )}
          </Box>

          <Box mx={"15px"} mt={"15px"} mb={"15px"}>
            <Box>
              {selectedService && (
                <div>
                  {selectedType ? (
                    <Box>
                      <Divider />
                      {selectedService.questions.map((question, index) => (
                        <div key={index}>
                          <Typography color={"#305966"} gutterBottom>
                            {question.question}
                          </Typography>
                          <Box gap={2} className="options-container">
                            {question.options
                              .filter((option) => option.type === selectedType)
                              .map((option, optionIndex) => (
                                <Button
                                  key={optionIndex}
                                  variant={
                                    selectedValue === option
                                      ? "contained"
                                      : "outlined"
                                  }
                                  onClick={() => handleValueSelect(option)}
                                  color="secondary"
                                  sx={{ margin: "6px" }}
                                >
                                  {option.value}
                                </Button>
                              ))}
                          </Box>
                        </div>
                      ))}
                    </Box>
                  ) : (
                    <div>{null}</div>
                  )}
                </div>
              )}
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
              onChange={handleDescriptionsChange}
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
              SAR {price}.00
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
          pb={"60px"}
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
              Please select type and size.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  )
}

export default SelectType
