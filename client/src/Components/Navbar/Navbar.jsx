import { HStack,Image,Select,Text, Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"
import { BiBuildingHouse,BiCar } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import {BsBagCheckFill ,BsFillBagFill } from "react-icons/bs";
import {CgProfile}from "react-icons/cg"
import { IoIosFolder } from "react-icons/io";



import {
    ChevronDownIcon,
  } from "@chakra-ui/icons"
  import { useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [Display] = useMediaQuery('(min-width: 800px)')
  
return (
<div>
{Display?<BigScreen/>:<SmallScreen/>}
</div>
  )
}
 const BigScreen=()=>{
  return(
  <HStack className={style.main}>
  <HStack gap={"25px"}>
    {/* logo */}
      <Image src={"https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"}  alt=""/>
     
     {/* menu */}
      <Menu>
    <MenuButton className={style.selection} as={Button} rightIcon={<ChevronDownIcon />}>
    More travel
      </MenuButton>
    <MenuList className={style.menulist}>
   <Link to={"/stays"} className={style.link}>   <MenuItem className={style.option} minH='48px'>
      <BiBuildingHouse/>
        <span><Text>Stays</Text> </span>
      </MenuItem>
      </Link>
   <Link to="/flight" className={style.link} >
      <MenuItem className={style.option} minH='40px'>
       <SlPlane/>
       
        <span><Text>Flight</Text>
          </span>
      </MenuItem>
      </Link>
      <MenuItem className={style.option} minH='40px'>
       <BsBagCheckFill/>
       
        <span> <Text>Package</Text> </span>
      </MenuItem>
    
      <MenuItem className={style.option} minH='40px'>
       <BiCar/>
       
        <span><Text>Cars</Text></span>
      </MenuItem>
   
      <MenuItem className={style.option} minH='40px'>
       <BiBuildingHouse/>
       
        <span><Text>Cruse</Text></span>
      </MenuItem>
      <MenuItem className={style.option} minH='40px'>
       <BiBuildingHouse/>
       
        <span><Text>Things to do</Text></span>
      </MenuItem>
      <MenuItem className={style.option} minH='40px'>
       
       
        <span><Text>Deals</Text></span>
      </MenuItem>
      <MenuItem className={style.option} minH='40px'>
       
       
       <span><Text>Group & meeting</Text></span>
     </MenuItem>
     <MenuItem className={style.option} minH='40px'>
       
       
       <span><Text>Travel Blogs</Text></span>
     </MenuItem>
    </MenuList>
  </Menu>
  
  
  
   
  </HStack >
  <HStack gap={"25px"} alignItems="center" textAlign={"center"} className={style.rightnavDiv}>
      <Text className={style.rightnav}>Espanol</Text>
      <Text className={style.rightnav}>List your property</Text>
      <Text className={style.rightnav}>Support</Text>
      <Text className={style.rightnav}>Trips</Text>
      <Text className={style.rightnav}>Sign in</Text>
  </HStack>
  
      </HStack>
  )
          
}

const SmallScreen=()=>{
  return <div>
     <HStack className={style.main}>
<HStack gap={"25px"}>
  {/* logo */}
    <Image src={"https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"}  alt=""/>
   
   {/* menu */}
    <Menu>
  <MenuButton className={style.selection} as={Button} rightIcon={<ChevronDownIcon />}>
  More travel
    </MenuButton>
  <MenuList className={style.menulist}>
    <MenuItem className={style.option} minH='48px'>
    <BiBuildingHouse/>
      <span><Text>Stays</Text> </span>
    </MenuItem>
 
    <MenuItem className={style.option} minH='40px'>
     <SlPlane/>
     
      <span><Text>Flight</Text>
        </span>
    </MenuItem>
 
    <MenuItem className={style.option} minH='40px'>
     <BsBagCheckFill/>
     
      <span> <Text>Package</Text> </span>
    </MenuItem>
  
    <MenuItem className={style.option} minH='40px'>
     <IoIosFolder/>
     
      <span><Text>Cars</Text></span>
    </MenuItem>
 
    <MenuItem className={style.option} minH='40px'>
     <BiBuildingHouse/>
     
      <span><Text>Cruse</Text></span>
    </MenuItem>
    <MenuItem className={style.option} minH='40px'>
     <BiBuildingHouse/>
     
      <span><Text>Things to do</Text></span>
    </MenuItem>
  </MenuList>
</Menu>
</HStack>
<HStack>

</HStack>
<BsFillBagFill className={style.bag}/>
<CgProfile className={style.profile}/>
</HStack>

  </div>
}


export default Navbar