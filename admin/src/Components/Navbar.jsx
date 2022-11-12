import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Navbar(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()





    return (
        <Box w="100%" position="fixed" left="0" top="0" display={{base:"flex",md:"flex",lg:"none"}} alignItems="center" textAlign="center">
          
          <Button ref={btnRef} variant="ghost" fontSize="26px" onClick={onOpen}>
          <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer
        
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white"/>

          <DrawerBody pt="100px" backgroundColor={"#0E1525"} color="white">
          <Link to="/" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-house"></i>
        <Heading size="md" fontWeight="400">Dashboard</Heading>
        </Box>
        </Link>

        <Link to="/users" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-user-plus" ></i>
        <Heading size="md" fontWeight="400">Users</Heading>
        </Box>
        </Link>
        <Link to="/stays" onClick={onClose}>
        <Box pl="40px"  pb="20px"  display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-hotel"></i>
        <Heading size="md" fontWeight="400">Stays</Heading>
        </Box>
        </Link>
        <Link to="/cars" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-taxi"></i>
        <Heading size="md" fontWeight="400">Cars</Heading>
        </Box>
        </Link>
        <Link to="/flights" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-plane-departure"></i>
        <Heading size="md" fontWeight="400">Flights</Heading>
        </Box>
        </Link>

        <Link to="/profile" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-user"></i>
        <Heading size="md" fontWeight="400">My Profile</Heading>
        </Box>
        </Link>

        <Link to="/logout" onClick={onClose}>
        <Box pl="40px"  pb="20px"   display="flex" alignItems="center" gap="10px">
        <i className="fa-solid fa-right-from-bracket"></i>
        <Heading size="md" fontWeight="400">Logout</Heading>
        </Box>
        </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

           <Link to="/"><Heading p="15px">Nomado, Admin</Heading></Link>
        </Box>
    );
}

export default Navbar;