import React from 'react'
import Home from '../Pages/Home/Home'
// import SearchResultsPage from '../Pages/Home/SearchResultPage'
import { Routes,Route } from 'react-router-dom'
import ServiceSelected from '../Pages/Services/ServiceSelected'
import SelectMades from '../Pages/Services/SelectMades'
import SelectDate from '../Pages/Services/SelectDate'
import Welcome from '../Pages/Home/Welcome'
import Login from '../Pages/Signin/Login'
import SignUp from '../Pages/Signup/SignUp'
import Order from '../Pages/Order/Order'
import AddCard from '../Pages/Order/AddCard'
import Cart from '../Pages/Cart/Cart'
// import AdminLogin from '../Pages/Admin/AdminLogin'
import Admin from '../Pages/Admin/Admin'
import Orders from '../Pages/Admin/Orders'
import Profile from '../Pages/Profile/Profile'
import EditServices from '../Pages/Admin/EditServices'
import SelectType from '../Pages/Services/SelectType'
import ThankYou from '../Pages/Thankyou/ThankYou'
import AdminLogin from '../Pages/Admin/AdminLogin';
import AdminAuthWrapper from '../Pages/Admin/AdminAuthWrapper'


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/services/:name/login" element={<Login />}></Route>
      <Route path="/services/:name/signup" element={<SignUp />}></Route>
      <Route path="/services/:name/welcome" element={<Welcome />}></Route>

      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/orders" element={<Cart />}></Route>

      {/* <Route path="/order" element={<Order />}></Route> */}
      {/* <Route path="/services/search" element={<SearchResultsPage/>} /> */}
      <Route path="/services/:name" element={<ServiceSelected />} />
      <Route path="/services/:name/selectmades" element={<SelectMades />} />
      <Route path="/services/:name/selecttype" element={<SelectType />} />
      <Route path="/services/:name/selectdate" element={<SelectDate />} />
      <Route path="/placeorder" element={<Order />} />
      <Route path="/addcard" element={<AddCard />}></Route>

      {/* <Route path='/services' element={<SearchResultsPage/>}/>
       <Route path='/admin/login' element={<AdminLogin/>}/>
        */}

      {/* Admin */}
      <Route
        path="/admin"
        element={<AdminAuthWrapper children={<Admin />} />}
      />
      <Route
        path="/admin/editservices"
        element={<AdminAuthWrapper children={<EditServices />} />}
      />
      <Route
        path="/admin/orders"
        element={<AdminAuthWrapper children={<Orders />} />}
      />

      <Route path="/adminlogin" element={<AdminLogin />} />
      

      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  )
}

export default Allroutes