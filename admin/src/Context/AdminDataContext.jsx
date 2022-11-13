import React, { useState } from 'react'
import { createContext } from 'react'


export const AdminData=createContext();


const AdminDataContext = ({children}) => {
   const [adata,setAdata]=useState({})
   const [token,setToken]=useState()
   const [hdetail,setHdetail]=useState({})
    return (
        <AdminData.Provider value={{adata,setAdata,token,setToken,hdetail,setHdetail}}>
         {children}
        </AdminData.Provider>
      )
}
export default AdminDataContext