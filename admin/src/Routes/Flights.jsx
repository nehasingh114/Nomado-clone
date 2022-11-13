import { Box, Button, Heading, Image, Input, Spinner, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminData } from '../Context/AdminDataContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


function Flights() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:addisOpen, onOpen:addonOpen, onClose:addonClose } = useDisclosure()
    const {token}=useContext(AdminData)
    const [data,setData]=useState([])
    const [state,setState]=useState({})
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [Id,setId]=useState()


    const getData=()=>{
        setLoading(true)
        axios.get("https://venomous-plough-7848.vercel.app/api/admin/flights").then((res)=>{
        let d=res.data.data.filter((el)=>{
            return el["uitk-image-media src"]!==""
        })     
        setData(d)
              setLoading(false)
              setError(false)
              setState({})
          }).catch((err)=>{
            setLoading(false)
            setError(true)
          })
       
    }

    useEffect(()=>{
       getData()
    },[])
    
    const handleDelete=(id)=>{
        axios.delete(`https://venomous-plough-7848.vercel.app/api/admin/flights/${id}`,{
            headers:{
                token:token
            }
        }).then((res)=>{
            getData()
        })
     }
     const handleEdit=(id)=>{
        onOpen()
        setId(id)
        
     }
     const handleEditSubmit=()=>{
        const edata={
            data:state
        }
        axios.patch(`https://venomous-plough-7848.vercel.app/api/admin/flights/update/${Id}`,edata,{
            headers:{
                token:token
            }
        }).then((res)=>{
            getData()
            onClose()
        })
     }

     
     
        const handleChange=(e)=>{
          const value=e.target.value
          setState({
            ...state,
            [e.target.name]:value
          })
        }


        const handleAdd=()=>{
            addonOpen()
        }

        const handleAddSubmit=()=>{
            const addData={
                data:state
            }
            axios.post(`https://venomous-plough-7848.vercel.app/api/admin/flights/add`,addData,{
                headers:{
                    token:token
                }
            }).then((res)=>{
                getData()
                addonClose()
                
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
                  <Heading fontWeight="500">Active Flights</Heading>
           <Box w="100%" pr="2em" display="flex" justifyContent="flex-end">
           <Button onClick={handleAdd} colorScheme="green">Add &nbsp;<i class="fa-solid fa-plus"></i></Button>
            </Box>   
    <Box>
     <Table mt="50px" overflow="scroll">
         <Thead>
             <Th></Th>
             <Th>Flight details</Th>
             <Th>From - To</Th>
             <Th></Th>
             <Th></Th>
         </Thead>
         <Tbody>
            

             {data && data.map((el)=>{
                 return <Tr key={el._id}>
                 <Td>
                    <Image w="200px" h='120px' src={el["uitk-image-media src"]}/>
                 </Td>
                 <Td>{el["uitk-heading"]}</Td>
                 <Td borderSpacing="5 5em">{el["uitk-text 2"]}</Td>
                 <Td>
                    <Box display="flex" gap="3">
                    <Button onClick={()=>handleDelete(el._id)}colorScheme="red"><i class="fa-solid fa-trash-can"></i></Button>
                    <Button onClick={()=>handleEdit(el._id)}colorScheme="yellow"><i class="fa-solid fa-pen-to-square"></i></Button>
                   
                    </Box>
                    </Td>
             </Tr>
             })}
         </Tbody>
     </Table>
    </Box>
    {/* Modal for edit button begins here  */}


    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Input type="text" onChange={handleChange} name="uitk-heading"  mb="10px" placeholder="Edit Flight detail's overview"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src"  mb="10px" placeholder="Edit Image url "/>
           <Input type="text"onChange={handleChange}  name="uitk-text 2" mb="10px"  placeholder="Edit departure from and destination"/>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleEditSubmit} colorScheme='green'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      {/* Modal for add button begins here  */}

      <Modal isOpen={addisOpen} onClose={addonClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Flight</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input type="text" onChange={handleChange} name="uitk-heading"  mb="10px" placeholder="Enter Flight detail's overview"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src"  mb="10px" placeholder="Enter Image url "/>
           <Input type="text"onChange={handleChange}  name="uitk-text 2" mb="10px"  placeholder="Enter departure from and destination"/>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={addonClose}>
              Cancel
            </Button>
            <Button onClick={handleAddSubmit} colorScheme='green'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Box>
        )
}
}
export default Flights;