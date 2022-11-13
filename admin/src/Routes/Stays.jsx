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
function Stays(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:addisOpen, onOpen:addonOpen, onClose:addonClose } = useDisclosure()
    const {token,setHdetail}=useContext(AdminData)
    const [data,setData]=useState([])
    const [state,setState]=useState({})
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [Id,setId]=useState()
   const Navigate =useNavigate()

//    "uitk-heading":"",
//    "uitk-image-media src":"",
//    "uitk-image-media src 2":"",
//    "uitk-image-media src 3":"",
//    "uitk-image-media src 4":"",
//    "uitk-text":""
    const getData=()=>{
        setLoading(true)
        axios.get("https://venomous-plough-7848.vercel.app/api/admin/hotels").then((res)=>{
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
        axios.delete(`https://venomous-plough-7848.vercel.app/api/admin/hotels/${id}`,{
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
        axios.patch(`https://venomous-plough-7848.vercel.app/api/admin/hotels/update/${Id}`,edata,{
            headers:{
                token:token
            }
        }).then((res)=>{
            getData()
            onClose()
        })
     }

        const handleClick=(el)=>{
            let img=[]
            if(el["uitk-image-media src"]!=="" && el["uitk-image-media src 2"]!=="" && el["uitk-image-media src 3"]!=="" && el["uitk-image-media src 4"]!==""){
                 img=[el["uitk-image-media src"],el["uitk-image-media src 2"],el["uitk-image-media src 3"],el["uitk-image-media src 4"]]
                
            }
            const obj={
                image:img,
                data:el
            }
            setHdetail(obj)
            Navigate("/hotel")
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
            axios.post(`https://venomous-plough-7848.vercel.app/api/admin/hotels/add`,addData,{
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
                  <Heading fontWeight="500">Active Stays</Heading>
           <Box w="100%" pr="2em" display="flex" justifyContent="flex-end">
           <Button onClick={handleAdd} colorScheme="green">Add &nbsp;<i class="fa-solid fa-plus"></i></Button>
            </Box>   
    <Box>
     <Table mt="50px" overflow="scroll">
         <Thead>
             <Th></Th>
             <Th>Name</Th>
             <Th>City</Th>
             <Th></Th>
             <Th></Th>
         </Thead>
         <Tbody>
            

             {data && data.map((el)=>{
                 return <Tr key={el._id}>
                 <Td onClick={()=>handleClick(el)}>
                    <Image w="200px" h='120px' src={el["uitk-image-media src"]}/>
                 </Td>
                 <Td onClick={()=>handleClick(el)}>{el["uitk-heading"]}</Td>
                 <Td onClick={()=>handleClick(el)} borderSpacing="5 5em">{el["uitk-text"]}</Td>
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
           <Input type="text" onChange={handleChange} name="uitk-heading"  mb="10px" placeholder="Edit Hotel name"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src"  mb="10px" placeholder="Edit Image url 1"/>
           <Input type="text"onChange={handleChange}  name="uitk-image-media src 2" mb="10px"  placeholder="Edit Image url 2"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src 3" mb="10px" placeholder="Edit Image url 3"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src 4" mb="10px" placeholder="Edit Image url 4"/>
           <Input type="text" onChange={handleChange} name="uitk-text" placeholder="Enter City name"/>
          
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
          <ModalHeader>Add new stay</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Input type="text" onChange={handleChange} name="uitk-heading"  mb="10px" placeholder="Enter Hotel name"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src"  mb="10px" placeholder="Enter Image url 1"/>
           <Input type="text"onChange={handleChange}  name="uitk-image-media src 2" mb="10px"  placeholder="Enter Image url 2"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src 3" mb="10px" placeholder="Enter Image url 3"/>
           <Input type="text" onChange={handleChange} name="uitk-image-media src 4" mb="10px" placeholder="Enter Image url 4"/>
           <Input type="text" onChange={handleChange} name="uitk-text" placeholder="Enter City name"/>
          
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
export default Stays;