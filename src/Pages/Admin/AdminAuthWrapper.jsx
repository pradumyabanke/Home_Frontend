import React, { useContext } from "react"
import { AdminAuthContext } from "../Context/AdminAuthContext"
import { Navigate, useLocation } from "react-router-dom"

const AdminAuthWrapper = ({ children }) => {
  const location = useLocation()
 
const {admin} = useContext(AdminAuthContext)

const storedAdmin = localStorage.getItem("admin")
// console.log(admin)
  return storedAdmin ? (
    children
  ) : (
    <Navigate to="/adminlogin" state={{ from: location }} />
  )
}

export default AdminAuthWrapper
