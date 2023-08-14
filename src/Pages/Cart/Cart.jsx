import React, { useContext, useState, useEffect } from "react";
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
} from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const Cart = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
const [loading,setLoading] = useState(true)
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);


  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  useEffect(() => {
    if (user) {
      setUserToken(user?.data.token);
      setUserId(user?.data._id);
    }
  }, []);

  // const getData = async () => {
  //   try {
  //     const response = await fetch("https://lazy-ruby-shawl.cyclic.app/orders");
  //     const data = await response.json();
  //     setOrders(data);
  //   } catch (error) {
  //     console.log("Error fetching services:", error);
  //   }
  // };


  const getData = async () => {
    try {
      const response = await axios.get(
        `http://54.90.98.169/${data.data._id}/get-service-details`,
        {
          headers: {
            Authorization: `${data.data.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOrders(response.data.data);
      setLoading(false)
      
    } catch (error) {
      console.error("Error:", error);
    }

  };

   useEffect(() => {
      getData();
   }, []);

  const handleDelete = async (id) => {
   
    //  try {
    //    const response = await axios.delete(
    //      `http://54.90.98.169/${data.data._id}/delete-service-details`,
    //      {"_id":id},
    //      {
    //        headers: {
    //          Authorization: `${data.data.token}`,
    //          "Content-Type": "application/json",
    //        },
    //      }
    //    );
       
    //    console.log(response.data);
    //  } catch (error) {
    //    console.error("Error:", error);
    //  }



      try {
        const response = await fetch(
          `http://54.90.98.169/${data.data._id}/delete-service-details`,
          {
            method: "DELETE",
            headers: {
              Authorization: `${data.data.token}`,
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ _id: id }),
          }
        );
console.log(response.data);
       
      } catch (error) {
        console.error("Error deleting data:", error);
      }
 handleSnackbarOpen("Service has been cancelled");
    getData();
  };

  // if(loading){
  //   return (
  //     <Box pt={"120px"}>
  //       <CircularProgress
  //         size={44}
  //         sx={{
  //           color: "#ffa56c",
  //           position: "absolute",
  //           top: "50%",
  //           left: "50%",
  //           marginTop: "-32px",
  //           marginLeft: "-40px",
  //         }}
  //       />
  //     </Box>
  //   );
  // }

  return (
    <Box py={"80px"}>
      {orders.length > 0 ? (
        <Box>
          {orders.map((el) => {
            return (
              <Box
                width={"90%"}
                margin={"auto"}
                my={"8px"}
                boxShadow={1}
                key={el.id}
              >
                <Divider />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  py="8px"
                  width={"90%"}
                  margin={"auto"}
                >
                  <Box color={"#305966"}>
                    <Typography lineHeight={1.1} fontWeight={"500"}>
                      {el.service_name}
                    </Typography>
                    <Typography lineHeight={1.1}>
                      {el.type_plan} 
                    </Typography>
                    <Typography lineHeight={1.1}>
                      {el.size_quantity} 
                    </Typography>
                    <Typography lineHeight={1.2}>
                      Ticket No - #{el.unique_ticket_no}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      lineHeight={1.1}
                      variant="body1"
                      color={"#305966"}
                      fontWeight={"600"}
                      textAlign={"right"}
                    >
                      SAR {el.subtotal}.00
                    </Typography>
                    <Button
                      onClick={() => handleDelete(el._id, el.title)}
                      variant="text"
                      sx={{
                        color: "red",
                        textTransform: "capitalize",
                        fontWeight: 700,
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
                <Divider />
              </Box>
            )
          })}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="success">
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      ) : (
        <Box
          height={"85vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
         
          <Typography color={"#305966"} fontSize={"18px"} textAlign={"center"}>
            No orders found
          </Typography>
        </Box>
      )}
    </Box>
  )
};

export default Cart;
