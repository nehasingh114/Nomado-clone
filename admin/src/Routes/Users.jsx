import { Box, Button, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AdminData } from '../Context/AdminDataContext';

function Users() {
    const {token}=useContext(AdminData)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)

    const getData=()=>{
        setLoading(true)
        axios.get("https://venomous-plough-7848.vercel.app/api/admin/users",{
            headers:{
                token:token
            }
        }).then((res)=>{
            setData(res.data.data)
            setLoading(false)
            setError(false)
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }
    useEffect(()=>{
       getData()
    },[])

 const handleDelete=(id)=>{
    axios.delete(`https://venomous-plough-7848.vercel.app/api/admin/users/${id}`,{
        headers:{
            token:token
        }
    }).then((res)=>{
        getData()
    })
 }

 if(loading===true){
    return ( <Box w="60%" m="auto" mt="300px" textAlign="center">
     <Spinner
         thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl'
         />
     </Box>)
    }else if(error===true){
     return (
       <Box w="60%" m="auto" mt="300px" textAlign="center">
               <Heading>401 Server Error</Heading>
           </Box>
     )
    }      
 else{
        return (

            <Box w={{base:"100%",md:"100%",lg:"82%"}} ml={{base:"0%",md:"0%",lg:"19%"}} mt={{base:"75px",md:"75px",lg:"55px"}} px="10px">
               <Heading fontWeight="500">Active Users</Heading>
    
               <Box>
                <Table mt="50px">
                    <Thead>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                    </Thead>
                    <Tbody>
                       

                        {data && data.map((el)=>{
                            console.log(data)
                            return <Tr key={el._id}>
                            <Td>{el.firstName}</Td>
                            <Td borderSpacing="5 5em">{el.email}</Td>
                            <Td><Button onClick={()=>handleDelete(el._id)} colorScheme="red">Delete</Button></Td>
                        </Tr>
                        })}
                    </Tbody>
                </Table>
               </Box>
            </Box>
        );
       }
   
}

export default Users;