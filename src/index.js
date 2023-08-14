import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import FormContextProvider from './Pages/Context/FormContext';
import { AuthProvider } from './Pages/Context/AuthContext';
import {HomeServicesContextProvider} from './Pages/Context/ServicesContext'
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import { AdminAuthProvider } from './Pages/Context/AdminAuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
  <BrowserRouter>
  <HomeServicesContextProvider>
  <FormContextProvider>
    <AuthProvider>
      <AdminAuthProvider>
            <App />
      </AdminAuthProvider>
    </AuthProvider>
   </FormContextProvider>
   </HomeServicesContextProvider>
  </BrowserRouter>
  </ThemeProvider>
  
);


