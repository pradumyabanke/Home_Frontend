
import './App.css';
import { Box, Typography } from '@mui/material';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer'
import Allroutes from './Allroutes/Allroutes';

import ServicePage from './Pages/Order/test2';

// import EditServices1 from './Pages/Admin/Test5';
// import SelectType from './Pages/Services/SelectType';

function App() {
  return (
  <Box>
    <Navbar/>
    
    <Allroutes/>
    
    {/* <EditServices1/> */}
    {/* <ServicePage/> */}
    {/* <Footer/> */}
  </Box>
    
  );
}

export default App;
