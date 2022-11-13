import { HStack, Image, Select, Text, Button } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"
import { BiBuildingHouse, BiCar } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import { BsBagCheckFill, BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import { IoIosFolder } from "react-icons/io";
import {Logo} from "../Logo.jsx"
import {
  ChevronDownIcon,
} from "@chakra-ui/icons"
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [Display] = useMediaQuery('(min-width: 800px)')

  return (
    <div>
      {Display ? <BigScreen /> : <SmallScreen />}
    </div>
  )
}
const BigScreen = () => {
  return (
    <HStack className={style.main}>
      <HStack gap={"25px"}>
        {/* logo */}
    <Link to="/"> <Logo iconColor={"white"} w="250px" h="40px" textColor={"white"}   /></Link>      
       
        {/* menu */}
        <Menu>
          <MenuButton className={style.selection} as={Button} rightIcon={<ChevronDownIcon />}>
            More travel
          </MenuButton>
          <MenuList className={style.menulist}>
            <Link to={"/stays"} className={style.link}>   <MenuItem className={style.option} minH='48px'>
              <BiBuildingHouse />
              <span><Text>Stays</Text> </span>
            </MenuItem>
            </Link>
            <Link to="/flight" className={style.link} >
              <MenuItem className={style.option} minH='40px'>
                <SlPlane />

                <span><Text>Flight</Text>
                </span>
              </MenuItem>
            </Link>
            <MenuItem className={style.option} minH='40px'>
              <BsBagCheckFill />

              <span> <Text>Package</Text> </span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <BiCar />

              <span><Text>Cars</Text></span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <BiBuildingHouse />

              <span><Text>Cruse</Text></span>
            </MenuItem>
            <MenuItem className={style.option} minH='40px'>
              <BiBuildingHouse />

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
        <Text className={style.rightnav}>List your property</Text>
        <Text className={style.rightnav}>Support</Text>
        <Link to=''>    <Text className={style.rightnav}>Trips</Text></Link>
      <Text className={style.rightnav}>
        <Menu className={style.signmenumain} >
  <MenuButton className={style.menuText}  >
  Sign in
  </MenuButton>
  <MenuList className={style.signmenu}>
    <MenuItem  className={style.signmenuitem}><h1>Members can access discounts, points and special features</h1></MenuItem>
    <Link to='/signin'>   <MenuItem className={style.signmenuitem}><Button  className={style.signmenuitemButton}>SignIn</Button></MenuItem></Link>
    <Link to='/signup'> <MenuItem className={style.signmenuitem}>create a free account</MenuItem></Link>
    <MenuItem className={style.signmenuitem}>List of favorites</MenuItem>
    <MenuItem className={style.signmenuitem}>Loyalty program</MenuItem>
    <hr />
    <MenuItem  className={style.signmenuitem}>Feedback</MenuItem>

  </MenuList>
</Menu>
</Text>
      </HStack>

    </HStack>
  )

}

const SmallScreen = () => {
  return <div>
    <HStack className={style.main}>
      <HStack gap={"25px"}>
        {/* logo */}
        <Link to="/">  <Logo iconColor={"white"} w="150px" h="40px" textColor={"white"}   /></Link>

        {/* menu */}
        <Menu>
          <MenuButton className={style.selection} as={Button} rightIcon={<ChevronDownIcon />}>
            More travel
          </MenuButton>
          <MenuList className={style.menulist}>
            <MenuItem className={style.option} minH='48px'>
              <BiBuildingHouse />
              <span><Text>Stays</Text> </span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <SlPlane />

              <span><Text>Flight</Text>
              </span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <BsBagCheckFill />

              <span> <Text>Package</Text> </span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <IoIosFolder />

              <span><Text>Cars</Text></span>
            </MenuItem>

            <MenuItem className={style.option} minH='40px'>
              <BiBuildingHouse />

              <span><Text>Cruse</Text></span>
            </MenuItem>
            <MenuItem className={style.option} minH='40px'>
              <BiBuildingHouse />

              <span><Text>Things to do</Text></span>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <HStack>

      </HStack>
            <BsFillBagFill className={style.bag} />
      {/* <Link to='/signin'>      <CgProfile className={style.profile} /></Link> */}
      {/* <Text className={style.rightnav}> */}
        <Menu className={style.signmenumain} >
  <MenuButton className={style.menuText}  >
  <CgProfile className={style.profile} />  </MenuButton>
  <MenuList className={style.signmenu}>
    <MenuItem  className={style.signmenuitem}><h1>Members can access discounts, points and special features</h1></MenuItem>
    <Link to='/signin'>   <MenuItem className={style.signmenuitem}><Button  className={style.signmenuitemButton}>SignIn</Button></MenuItem></Link>
    <Link to='/signup'> <MenuItem className={style.signmenuitem}>create a free account</MenuItem></Link>
    <MenuItem className={style.signmenuitem}>List of favorites</MenuItem>
    <MenuItem className={style.signmenuitem}>Loyalty program</MenuItem>
    <hr />
    <MenuItem  className={style.signmenuitem}>Feedback</MenuItem>

  </MenuList>
</Menu>
{/* </Text> */}
    </HStack>

  </div>
}


export default Navbar