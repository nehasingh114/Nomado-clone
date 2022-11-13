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
    const { isOpen:addisOpen, onOpen:addonOpen, onClose:addonClose } = useDisclosure()
    const [data,setData]=useState([
        {
         name:"Ford F-Series",
         brand:"Ford",
         rate:"$10",
         img:"https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/11/2021-Ford-F-150-featured1.jpg"
        },{
            name:"Silverado",
            brand:"Chevrolet",
            rate:"$12",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/01/2020_Chevrolet_Silverado_Midnight.jpg"
        },{
            name:"RAV4",
            brand:"Toyota",
            rate:"$14",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/filters:format(jpg)/https://www.forbes.com/wheels/wp-content/uploads/2019/12/Toyota-RAV4-TRD-exterior-resized.png"
        },{
            name:"Camry",
            brand:"Toyota",
            rate:"$12",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/filters:format(jpg)/https://www.forbes.com/wheels/wp-content/uploads/2019/12/Toyota-RAV4-TRD-exterior-resized.png   "
        },{
            name:"Equinox",
            brand:"Chevrolet",
            rate:"$10",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/01/2020_Chevrolet_Equinox.jpg"
        },{
            name:"Civic",
            brand:"Honda",
            rate:"$9",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/08/Honda-Civic-sedan.jpg"
        },{
            name:"Tacoma",
            brand:"Toyota  ",
            rate:"$15",
            img:"https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2021/01/2020_Toyota_Tacoma.jpg"
        }
    ])
    const [state,setState]=useState({})
  


    
    
    const handleDelete=(el)=>{
       const d=data.filter((e)=>{
        return e.name!==el
       })
       setData(d)
     }
    
   

     
     
        const handleChange=(e)=>{
          const value=e.target.value
          setState({
            ...state,
            [e.target.name]:value
          })
        }



        const handleAddSubmit=()=>{
           
                addonClose()
                const d=data
              d.push(state)
              setData(d)
          
        }


   
        return (

            <Box w={{base:"100%",md:"100%",lg:"82%"}} ml={{base:"0%",md:"0%",lg:"19%"}} mt={{base:"75px",md:"75px",lg:"55px"}} px="10px">
                  <Heading fontWeight="500">Active Cars</Heading>
           <Box w="100%" pr="2em" display="flex" justifyContent="flex-end">
           <Button onClick={addonOpen} colorScheme="green">Add &nbsp;<i class="fa-solid fa-plus"></i></Button>
            </Box>   
    <Box>
     <Table mt="50px" overflow="scroll">
         <Thead>
             <Th></Th>
             <Th>Car name</Th>
             <Th>Brand</Th>
             <Th>Rent per hour</Th>
             <Th></Th>
         </Thead>
         <Tbody>
            

             {data && data.map((el,i)=>{
                 return <Tr key={el.name}>
                 <Td>
                    <Image w="200px" h='120px' src={el.img}/>
                 </Td>
                 <Td>{el.name}</Td>
                 <Td borderSpacing="5 5em">{el.brand}</Td>
                 <Td borderSpacing="5 5em">{el.rate}/hr</Td>
                 <Td>
                    <Box display="flex" gap="3">
                    <Button onClick={()=>handleDelete(el.name)}colorScheme="red"><i class="fa-solid fa-trash-can"></i></Button>
                   
                   
                    </Box>
                    </Td>
             </Tr>
             })}
         </Tbody>
     </Table>
    </Box>
  


      {/* Modal for add button begins here  */}

      <Modal isOpen={addisOpen} onClose={addonClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input type="text" onChange={handleChange} name="name"  mb="10px" placeholder="Enter car name"/>
           <Input type="text" onChange={handleChange} name="img"  mb="10px" placeholder="Enter Image url "/>
           <Input type="text"onChange={handleChange}  name="brand" mb="10px"  placeholder="Enter car brand name"/>
           <Input type="text"onChange={handleChange}  name="rate" mb="10px"  placeholder="Enter car rent per hour"/>
          
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

export default Flights;