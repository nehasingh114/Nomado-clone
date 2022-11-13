import React, { useContext } from 'react';
import { Box, Button, Flex, Image, Skeleton, Icon, Text, SimpleGrid, Heading } from '@chakra-ui/react'

import { useState } from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { AdminData } from '../Context/AdminDataContext';
import { CgGym } from 'react-icons/cg';
import { BiWifi } from 'react-icons/bi';
import { MdOutlineAir, MdPets, MdRestaurantMenu, MdLocalLaundryService, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';







function HotelDetail(props) {
    const [loading, setLoading] = useState(false)
   
    const {hdetail,setHdetail}=useContext(AdminData)
     const arr=Array(Math.round(hdetail.data['uitk-text 3'])).fill(0)
   

    const amenities = [{ text: "Free Wifi", icon: BiWifi },
{ text: 'Air Conditioning', icon: MdOutlineAir },
{ text: 'Pet Friendly', icon: MdPets },
{ text: "Restaurant", icon: MdRestaurantMenu },
{ text: "Laundry", icon: MdLocalLaundryService },
{ text: 'Gym', icon: CgGym }]

  if(hdetail.image.lenght<3){
    return(
        <Box w="60%" m="auto" mt="300px" textAlign="center">
            <Heading>Sorry, Work under progress</Heading>
            </Box>
    )
  }else{
    return (
        <Box w={{base:"100%",md:"100%",lg:"82%"}} ml={{base:"0%",md:"0%",lg:"19%"}} mt={{base:"75px",md:"75px",lg:"55px"}} px="10px">
        <Flex justifyContent={'space-between'} alignItems='center' px='20px'
            bg='white' pt='15px' pb='14px'>
            <Link to='/stays'>
               <Flex color='teal' gap='10px' alignItems='center'>
                <Icon as={CgArrowLongLeft} fontSize='25px' cursor='pointer' />
                    <Text fontSize='13px' _hover={{ textDecor: "underline" }}>See all stays</Text>
               </Flex>
            </Link>
            
        </Flex>
        <Skeleton isLoaded={!loading}>
            <Flex h={{ base: "200px", sm: "45vw", md: "37vw", lg: '30vw', xl: "25vw" }} w='100%' justifyContent='space-between' gap='5px' pb='10px' bg='white'>
                <Box w={{ base: "100%", sm: "75%", md: "65%", lg: '47%' }}>
                    {<Image src={hdetail.image[0]} h='100%' w='100%' borderRadius='8px' objectFit='fill' />}
                </Box>
                <Flex w={{ sm: "25%", md: "35%", lg: '53%' }} flexDir={'column'} justifyContent='space-between' h='100%' display={{ base: "none", sm: "flex" }}>
                    <Flex w='100%' h='49%' justifyContent='space-between' gap='5px'>
                        <Box w={{ md: "100%", lg: '50%' }}>
                            {<Image src={hdetail.image[1]} h='100%' w='100%' borderRadius='8px' objectFit='fill' />}
                        </Box>
                        <Box w='50%' display={{ base: "none", lg: "block" }}>
                            {<Image src={hdetail.image[2]} h='100%' w='100%' borderRadius='8px' objectFit='fill' />}
                        </Box>
                    </Flex>
                    <Flex w='100%' h='49%' justifyContent='space-between' gap='5px'>
                        <Box w={{ md: "100%", lg: '50%' }}>
                            {<Image src={hdetail.image[3]} h='100%' w='100%' borderRadius='8px' objectFit='fill' />}
                        </Box>
                        <Box w='50%' display={{ base: "none", lg: "block" }}>
                            { <Image src={hdetail.image[0]} h='100%' w='100%' borderRadius='8px' objectFit='fill' />}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Skeleton>
       
        <Flex bg='white' px={{ base: "14px", md: '20px' }} py='20px'>
            <Box>
                <Heading fontSize={{ base: "20px", sm: "22px", md: '25px', lg: "28px" }}>
                    {hdetail.data['uitk-heading']}
                </Heading>
                <Flex mt='10px' fontSize='20px' gap='2px' cursor='pointer'>
                    {
                   arr.map((ele,i) => (
                    
                        <Icon as={MdStar} key={i} color='red' />
                    ))}
                </Flex>
                <Text fontSize='18px' fontWeight={600} mt='15px'>
                    {hdetail.data['uitk-text 3']}{hdetail.data['uitk-text 4']} &nbsp;{hdetail.data['uitk-text 5']} &nbsp; {hdetail.data['uitk-text 6']}
                </Text>
                <Text fontSize='14px' color='gray' mt='6px'>
                    Guest rated this property 4.5/5 for cleanliness.
                </Text>
              

                <Text fontSize='18px' fontWeight={600} mt='20px'>
                    Popular amenities
                </Text>
                <SimpleGrid columns={2} spacing={4} mt='10px'>
                    {amenities.map(ele => (
                        <Flex gap='8px' alignItems={'center'} key={ele.text}>
                            <Icon as={ele.icon} fontSize='20px' fontWeight={700}
                                color='rgba(0,0,0,0.8)' />
                            <Text fontSize={'14px'} color='rgba(0,0,0,0.7)'>
                                {ele.text}
                            </Text>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Box>
        </Flex>

    </Box>
    );
  }
}

export default HotelDetail;