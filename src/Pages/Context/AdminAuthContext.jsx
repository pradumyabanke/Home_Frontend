import React, { createContext, useState, useEffect } from "react"



export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({children})=>{

    

    useEffect(() => {
      const storedAdmin = localStorage.getItem("admin")
      if (storedAdmin) {
        setAdmin(JSON.parse(storedAdmin))
      }
    }, [])

    const [admin, setAdmin] = useState(null)

    const adminLogin = (adminData) => {
      setAdmin(adminData)
      localStorage.setItem("admin", JSON.stringify(adminData))
    }

     const adminLogout = () => {
       setAdmin(null)
       localStorage.removeItem("admin")
     }

    return (
        <AdminAuthContext.Provider value={{admin,adminLogin,adminLogout}} >
            {children}
        </AdminAuthContext.Provider>
    )
}