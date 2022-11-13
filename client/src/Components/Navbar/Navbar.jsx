import { HStack, Image, Select, Text, Box, Button, Divider } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"
import { BiBuildingHouse, BiCar } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import { BsBagCheckFill, BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import { IoIosFolder } from "react-icons/io";
import { Logo } from "../Logo.jsx"
import {
  ChevronDownIcon,
} from "@chakra-ui/icons"
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAPI } from '../../redux/auth/auth.action'



const Navbar = () => {
  const [Display] = useMediaQuery('(min-width: 800px)')

  return (
    <div>
      {Display ? <BigScreen /> : <SmallScreen />}
    </div>
  )
}
const BigScreen = () => {
  const { isAuth, data } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  return (
    <HStack className={style.main}>
      <HStack gap={"25px"}>
        {/* logo */}
        <Link to="/"> <Logo iconColor={"white"} w="250px" h="40px" textColor={"white"} /></Link>

        {/* menu */}
        <Menu>
          <MenuButton className={style.selection} as={Button} rightIcon={<ChevronDownIcon />}
            bg='rgb(0,37,60)' _hover={{ bg: "rgb(0,37,60)",color:"#008DA4" }} _active={{ bg: "rgb(0,37,60)",color:"#008DA4" }} _focus={{ bg: "rgb(0,37,60)" ,color:"#008DA4"}}>
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
        <Link to='/trips'>    <Text className={style.rightnav}>Trips</Text></Link>
        {!isAuth ? (
          <Link to='/signin'>  <Text className={style.rightnav}>Sign in</Text></Link>
        ) : (
          <Box>
            <Popover border='none' >
              <PopoverTrigger border='none'>
                <Text className={style.rightnav} cursor='pointer'>{data?.firstName}</Text>
              </PopoverTrigger>
              <PopoverContent bg='whitesmoke' minW='300px' borderRadius='10px' pt='30px' mt='-50px' border='none'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <PopoverHeader fontSize='18px' fontWeight={600}>Hi {data?.firstName}
                </PopoverHeader>
                <PopoverBody>
                  <Text fontSize='14px' color='GrayText' mt='5px'>
                    {data?.email}</Text>
                  <Button mt='10px' border='none' bg='rgba(0,0,0,0.6)' color='white'
                    p='5px 10px' borderRadius='4px' cursor='pointer'>
                    Silver Member
                  </Button>
                  <Box borderTop='1px solid rgba(0,0,0,0.2)' mt='20px'>
                    <Text fontSize='14px' _hover={{ color: "blue" }} cursor='pointer' textAlign='left' my='25px' pl='25px'>
                      Account
                    </Text>
                    <Text fontSize='14px' _hover={{ color: "blue" }} cursor='pointer' textAlign='left' my='25px' pl='25px'>
                      List of favourites
                    </Text>
                    <Text fontSize='14px' _hover={{ color: "blue" }} cursor='pointer' textAlign='left' my='25px' pl='25px'>
                      Feedback
                    </Text>
                    <Text fontSize='14px' _hover={{ color: "blue" }} cursor='pointer' textAlign='left' my='25px' pt='25px' pl='25px' borderTop='1px solid rgba(0,0,0,0.2)' onClick={() => dispatch(logoutAPI())}>
                      Sign Out
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        )}
      </HStack>

    </HStack>
  )

}

const SmallScreen = () => {
  return <div>
    <HStack className={style.main}>
      <HStack gap={"25px"}>
        {/* logo */}
        <Link to="/">  <Logo iconColor={"white"} w="150px" h="40px" textColor={"white"} /></Link>

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
      <Link to='/signin'>      <CgProfile className={style.profile} /></Link>
    </HStack>

  </div>
}


export default Navbar