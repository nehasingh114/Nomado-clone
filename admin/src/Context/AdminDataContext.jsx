import React, { useState } from 'react'
import { createContext } from 'react'


export const AdminData=createContext();


const AdminDataContext = ({children}) => {
   const [adata,setAdata]=useState({})
   const [token,setToken]=useState()

    return (
        <AdminData.Provider value={{adata,setAdata,token,setToken}}>
         {children}
        </AdminData.Provider>
      )
}
export default AdminDataContext