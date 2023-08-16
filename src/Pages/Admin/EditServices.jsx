import React, { useState, useEffect, useContext } from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Alert,Select, Card, CardMedia, CardContent, CardActions, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, MenuItem, Link } from '@mui/material';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddIcon from '@mui/icons-material/Add';
import {AdminAuthContext} from '../Context/AdminAuthContext'

const EditServices = () => {

  const categories = [
    "Accessories cleaning",
    "Home cleaning",
    "Pest control",
    "Beauty packages",
    "Massage package",
    "Cosmetic packages",
  ]

  const initialServiceForm = {
    title: "",
    description: "",
    details: [],
    image: "",
    types: {
      question: "",
      options: [],
    },
    questions: [
      {
        question: "",
        options: [{type:"",value:"",price:""}],
      },
    ],
    rating: "",
    range: "",
    summary: "",
    category: "",
    min_Price: 0,
  }

const { admin } = useContext(AdminAuthContext)

  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [serviceForm, setServiceForm] = useState(initialServiceForm);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const [error, setError] = useState('');
const [searchInput, setSearchInput] = useState('');
const [filteredServices, setFilteredServices] = useState([]);

const [adminId,setAdminId] = useState("")
const [adminToken,setAdminToken] = useState("")

const availableTypes = serviceForm.types?.options.map((option) => option)
const adminData = JSON.parse(localStorage.getItem("admin"))


  useEffect(() => {
    fetchServices();
  }, []);


  const fetchServices = async () => {
    try {
      const response = await axios.get("http://54.90.98.169/Get-Services")
      
      setServices(response.data.data);
      setFilteredServices(response.data.data);
    } catch (error) {
      console.error(error);
    }
   
  };
  const handleEdit = (service) => {
    setEditingService(service);
    setServiceForm(service);
    setDialogOpen(true);
  };


  const handleInputChange = (event) => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      [event.target.name]: event.target.value,
      category: event.target.name === 'category' ? event.target.value : prevServiceForm.category,
    }));
  };




  


  const handleAddNewService = () => {
    setDialogOpen(true);
  };

  const handleAddService = async () => {
    const existingService = services.find(
      (service) => service.title.toLowerCase() === serviceForm.title.toLowerCase()
    );
  
    if (existingService) {
      setError('Service already exists!');
      return;
    }
    try {
      await axios.post(
        `http://54.90.98.169/${adminData._id}/Add-Services`,serviceForm,{
            headers: {
              Authorization: `${adminData.token}`,
              "Content-Type": "application/json",
            }
          }
        
      )
      
    } catch (error) {
      console.error(error);
    }

     fetchServices();
      setServiceForm(initialServiceForm);
      setDialogOpen(false);
      setOpenSnackbar(true);
      setAlertMessage('New service added successfully!');
    setAlertOpen(true);
    
  };


  const handleUpdate = async () => {
    const updatedService = {
      _id: editingService._id,
      ...serviceForm,
    };

    try {
      await axios.put(
        `http://54.90.98.169/${adminData._id}/Update-Service`,
        updatedService,
        {
          headers: {
            Authorization: `${adminData.token}`,
            "Content-Type": "application/json",
          },
        }
      )  
      
    } catch (error) {
      console.error(error);
    }

    fetchServices();
    setEditingService(null);
      setServiceForm(initialServiceForm);
      setDialogOpen(false);
      setAlertMessage('Service updated successfully!');
    setAlertOpen(true);
  };

  const handleDelete = async (service) => {
    
    try {
      await axios.delete(
        `http://54.90.98.169/${adminData._id}/Delete-Service`,
        { 
          data:{_id:service._id},
          headers: {
            Authorization: `${adminData.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      
    } catch (error) {
      console.error(error);
    }

    fetchServices();
    setAlertMessage('Service deleted successfully!');
    setAlertOpen(true);
  };

 


  const handleAddDetail = () => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      details: [...prevServiceForm.details, ""],
    }))
  }

  const handleDetailChange = (index, value) => {
    setServiceForm((prevServiceForm) => {
      const updatedDetails = [...prevServiceForm.details]
      updatedDetails[index] = value
      return {
        ...prevServiceForm,
        details: updatedDetails,
      }
    })
  }

  const handleRemoveDetail = (index) => {
    setServiceForm((prevServiceForm) => {
      const updatedDetails = [...prevServiceForm.details]
      updatedDetails.splice(index, 1)
      return {
        ...prevServiceForm,
        details: updatedDetails,
      }
    })
  }


  const handleAddTypeQuestionChange = (e)=>{
    setServiceForm((prevServiceForm) => ({
       ...prevServiceForm,
       types: {
         ...prevServiceForm.types,
         question: e.target.value
       },
     }))

  }

   const handleAddTypeOption = () => {
     setServiceForm((prevServiceForm) => ({
       ...prevServiceForm,
       types: {
         ...prevServiceForm.types,
         options: [...prevServiceForm.types.options, ""],
       },
     }))
   }

   const handleTypeOptionChange = (index, value) => {
     setServiceForm((prevServiceForm) => {
       const updatedOptions = [...prevServiceForm.types.options]
       updatedOptions[index] = value
       return {
         ...prevServiceForm,
         types: {
           ...prevServiceForm.types,
           options: updatedOptions,
         },
       }
     })
   }

   const handleRemoveTypeOption = (index) => {
     setServiceForm((prevServiceForm) => {
       const updatedOptions = [...prevServiceForm.types.options]
       updatedOptions.splice(index, 1)
       return {
         ...prevServiceForm,
         types: {
           ...prevServiceForm.types,
           options: updatedOptions,
         },
       }
     })
   }


 

  const handleQuestionChange = (event) => {
  setServiceForm((prevServiceForm) => ({
    ...prevServiceForm,
    questions: [
      {
        ...prevServiceForm.questions[0],
        question: event.target.value,
      },
      ...prevServiceForm.questions.slice(1),
    ],
  }));
};

const handleQuestionOptionChange = (
  questionIndex,
  optionIndex,
  field,
  value
) => {
  setServiceForm((prevServiceForm) => {
    const updatedQuestions = [...prevServiceForm.questions]
    const updatedOptions = [...prevServiceForm.questions[questionIndex].options]
    if (field === "value") {
      updatedOptions[optionIndex].value = value
    } else if (field === "price") {
      updatedOptions[optionIndex].price = value
    }
    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      options: updatedOptions,
    }
    return {
      ...prevServiceForm,
      questions: updatedQuestions,
    }
  })
}
   

    // const handleQuestionOptionChange = (
    //   questionIndex,
    //   optionIndex,
    //   field,
    //   value
    // ) => {
    //   setServiceForm((prevServiceForm) => {
    //     const updatedQuestions = [...prevServiceForm.questions]
    //     const updatedOptions = [
    //       ...prevServiceForm.questions[questionIndex].options,
    //     ]
    //     if (field === "value") {
    //       updatedOptions[optionIndex].value = value
    //     } else if (field === "price") {
    //       updatedOptions[optionIndex].price = value
    //     }
    //     updatedQuestions[questionIndex] = {
    //       ...updatedQuestions[questionIndex],
    //       options: updatedOptions,
    //     }
    //     return {
    //       ...prevServiceForm,
    //       questions: updatedQuestions,
    //     }
    //   })
    // }

    // const handleRemoveQuestionOption = (questionIndex, optionIndex) => {
    //   setServiceForm((prevServiceForm) => {
    //     const updatedQuestions = [...prevServiceForm.questions]
    //     const updatedOptions = [
    //       ...prevServiceForm.questions[questionIndex].options,
    //     ]
    //     updatedOptions.splice(optionIndex, 1)
    //     updatedQuestions[questionIndex] = {
    //       ...updatedQuestions[questionIndex],
    //       options: updatedOptions,
    //     }
    //     return {
    //       ...prevServiceForm,
    //       questions: updatedQuestions,
    //     }
    //   })
    // }

    const handleAddOption = (questionIndex) => {
      setServiceForm((prevServiceForm) => {
        const updatedQuestions = [...prevServiceForm.questions]
        updatedQuestions[questionIndex].options.push({
          type: "",
          value: "",
          price: "",
        })
        return {
          ...prevServiceForm,
          questions: updatedQuestions,
        }
      })
    }

    const handleOptionChange = (questionIndex, optionIndex, field, value) => {
      setServiceForm((prevServiceForm) => {
        const updatedQuestions = [...prevServiceForm.questions]
        const updatedOptions = [
          ...prevServiceForm.questions[questionIndex].options,
        ]
        if (field === "value") {
          updatedOptions[optionIndex].value = value
        } else if (field === "price") {
          updatedOptions[optionIndex].price = value
        } else if (field === "type") {
          updatedOptions[optionIndex].type = value
        }
        updatedQuestions[questionIndex] = {
          ...updatedQuestions[questionIndex],
          options: updatedOptions,
        }
        return {
          ...prevServiceForm,
          questions: updatedQuestions,
        }
      })
    }

    const handleRemoveOption = (questionIndex, optionIndex) => {
      setServiceForm((prevServiceForm) => {
        const updatedQuestions = [...prevServiceForm.questions]
        updatedQuestions[questionIndex].options.splice(optionIndex, 1)
        return {
          ...prevServiceForm,
          questions: updatedQuestions,
        }
      })
    }
 
 

  const handleCancel = () => {
    setEditingService(null);
    setServiceForm(initialServiceForm);
    setDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
  };


  useEffect(() => {
    if(services){
let filteredData = services;
if (searchInput) {
  filteredData = filteredData.filter((service) =>
    service.title.toLowerCase().includes(searchInput.toLowerCase())
  )
}

setFilteredServices(filteredData)
    }
    

    // Filter by search input
    
  }, [services, searchInput]);
  

  return (
    <Box backgroundColor={"#f1f5fd"} pt={"100px"}>
      <Box
        columnGap={"30px"}
        maxWidth={{ xs: "95%", md: "85%" }}
        mt={"20px"}
        margin={"auto"}
      >
        <Link href="/admin" color="inherit" underline="none">
          {" "}
          <Button
            sx={{
              display: "block",

              width: "10rem",
              mb: "30px",
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
            Admin page
          </Button>{" "}
        </Link>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="1rem"
        >
          <TextField
            sx={{ bgcolor: "#fff" }}
            label="Search"
            placeholder="Search service"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            margin="dense"
          />
        </Box>
      </Box>

      <Box maxWidth={{ xs: "95%", md: "85%" }} margin={"auto"} pb={"6rem"}>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gap={"20px"}
        >
          {filteredServices.map((service) => {
            return (
              <Card sx={{ cursor: "pointer" }} key={service._id}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt="green iguana"
                />
                <CardContent
                  sx={{ textAlign: "left", padding: "15px", pb: "15px" }}
                >
                  <Typography color={"#11151e"} fontSize={"16px"} mb={"5px"}>
                    {service.title}
                  </Typography>
                  <Typography
                    color={"#3f78e0"}
                    fontSize={"18px"}
                    fontWeight={500}
                  >
                    {service.range}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<EditNoteIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(service)}
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    sx={{
                      bgcolor: "#fe6464",
                      ":hover": { bgcolor: "#e45a5a" },
                    }}
                    onClick={() => handleDelete(service)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            )
          })}
        </Box>
      </Box>

      <Dialog open={dialogOpen} onClose={handleCancel}>
        <DialogTitle>
          {editingService ? "Edit Service" : "Add New Service"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={serviceForm.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description"
            name="description"
            value={serviceForm.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Typography variant="h6" sx={{ marginTop: "1rem" }}>
            Details:
          </Typography>
          {serviceForm.details.map((detail, index) => (
            <Box key={index} display="flex" alignItems="center">
              <TextField
                label={`Detail ${index + 1}`}
                value={detail}
                onChange={(e) => handleDetailChange(index, e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{ marginLeft: "1rem" }}
                onClick={() => handleRemoveDetail(index)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
            onClick={handleAddDetail}
          >
            Add Detail
          </Button>

          <TextField
            label="MinPrice"
            name="min_Price"
            value={serviceForm.min_Price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            type="url"
            label="Image"
            name="image"
            value={serviceForm.image}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            select
            label="Category"
            name="category"
            value={serviceForm.category}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            defaultValue={serviceForm.category}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          {/* Type Options */}

          {serviceForm.types && (
            <Box>
              <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                Type/Plan Options:
              </Typography>
              <TextField
                label="Enter Type/Plan Question"
                name="types"
                value={serviceForm.types?.question}
                onChange={(e) => handleAddTypeQuestionChange(e)}
                fullWidth
                margin="normal"
              />
            </Box>
          )}

          {serviceForm.types && serviceForm.types.options && (
            <Box>
              {serviceForm.types.options.map((option, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    label={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) =>
                      handleTypeOptionChange(index, e.target.value)
                    }
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    sx={{ marginLeft: "1rem" }}
                    onClick={() => handleRemoveTypeOption(index)}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
              <Button
                variant="outlined"
                size="small"
                sx={{ marginTop: "1rem" }}
                onClick={handleAddTypeOption}
              >
                Add Type Option
              </Button>
            </Box>
          )}

          <Typography variant="h6" sx={{ marginTop: "1rem" }}>
            Size/Quantity:
          </Typography>
          <TextField
            label="Type Question"
            name="questionsQuestion"
            value={serviceForm.questions[0].question}
            onChange={(e) => handleQuestionChange(e)}
            fullWidth
            margin="normal"
          />
          {serviceForm.questions[0].options.map((option, optionIndex) => (
            <Box key={optionIndex} display="flex" alignItems="center">
              <TextField
                label={`Option ${optionIndex + 1}`}
                value={option.value}
                onChange={(e) =>
                  handleOptionChange(0, optionIndex, "value", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Price"
                value={option.price}
                onChange={(e) =>
                  handleOptionChange(0, optionIndex, "price", e.target.value)
                }
                fullWidth
                margin="dense"
              />
              {/* Replace the text field with a select field */}
              <Select
                value={option}
                onChange={(e) =>
                  handleOptionChange(0, optionIndex, "type", e.target.value)
                }
                label="Type"
                fullWidth
                margin="normal"
              >
                {availableTypes?.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {/* Button to remove the option */}
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{ marginLeft: "1rem" }}
                onClick={() => handleRemoveOption(0, optionIndex)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
            onClick={() => handleAddOption(0)} // Pass the question index (0 in this case) to the function
          >
            Add Option
          </Button>

          <TextField
            label="Rating"
            name="rating"
            value={serviceForm.rating}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Price Range"
            name="range"
            value={serviceForm.range}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          {/* <TextField
            label="Summary"
            name="summary"
            value={serviceForm.summary}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              background: "#C1FF72",
              color: "#343f52",
              transition: "all 300ms ease 0s",
              ":hover": { background: "#9acc5b" },
            }}
            variant="contained"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#C1FF72",
              color: "#343f52",
              transition: "all 300ms ease 0s",
              ":hover": { background: "#9acc5b" },
            }}
            onClick={editingService ? handleUpdate : handleAddService}
          >
            {editingService ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert onClose={() => setAlertOpen(false)} severity="success">
          {alertMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>

      <Button
        startIcon={<AddIcon fontSize="18px" />}
        sx={{
          position: "fixed",
          top: "105px",
          right: "20px",

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
        onClick={handleAddNewService}
      >
        Add New Service
      </Button>
    </Box>
  )
}

export default EditServices