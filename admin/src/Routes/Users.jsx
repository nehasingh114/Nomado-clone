import { Box, Button, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AdminData } from '../Context/AdminDataContext';

function Users() {
    const {token}=useContext(AdminData)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)


    const getData=()=>{
        axios.get("https://venomous-plough-7848.vercel.app/api/admin/users",{
            headers:{
                token:token
            }
        }).then((res)=>{
            setData(res.data.data)
            setLoading(false)
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

       if(loading){
        return (<Box w="60%" m="auto" mt="300px" textAlign="center">
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Box>)
       }else{
        return (

            <Box w="82%" ml="20%" mt="55px" pr="10px">
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