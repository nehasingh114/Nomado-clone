import { Box, Heading, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminData } from '../Context/AdminDataContext';

function Loader() {
    const params=useParams()
    const Navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const {adata,setAdata,setToken}=useContext(AdminData)
    useEffect(()=>{
       axios.post("https://venomous-plough-7848.vercel.app/api/admin/redirect",{},{
        headers:{
            token:params.token
        }
       }).then((res)=>{
        setToken(params.token)
        setAdata(res.data.data)
        setLoading(false)
        if(adata.role==="admin"){
            localStorage.setItem("Nomadot",JSON.stringify(params.token))
            Navigate("/")
         }
       },[]).catch((err)=>{
        setLoading(false)
       })
    })
    
   if(loading===true){
    return (
        <Box w="60%" m="auto" mt="300px" textAlign="center">
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Box>
    )
    }else{
        return (
            <Box w="60%" m="auto" mt="300px" textAlign="center">
            <Heading>404 UnAuthorized</Heading>
            </Box>
         );
    }
   
    
}

export default Loader;