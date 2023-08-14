import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

// Create the context
const HomeServicesContext = createContext([]);

const HomeServicesContextProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await axios.get("http://54.90.98.169/Get-Services") 
        
        setServicesData(response.data.data);
      } catch (error) {
        console.error("Error fetching home services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <HomeServicesContext.Provider value={servicesData}>
      {children}
    </HomeServicesContext.Provider>
  );
};

export { HomeServicesContext, HomeServicesContextProvider };
