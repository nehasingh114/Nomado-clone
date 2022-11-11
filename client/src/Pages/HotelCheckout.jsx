import { Box, Heading, Flex, Icon, Text } from "@chakra-ui/react"
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux"
import { CheckoutMainSection } from "../components/HotelCheckout/CheckoutMainSection";
import { CheckoutSidebar } from "../components/HotelCheckout/CheckoutSidebar";

export const HotelCheckout = () => {
    const { roomType, data } = useSelector(store => store.singleHotel);
    console.log(roomType)
    return (
        <Box px={{ sm: "20px", lg: "50px", xl: "80px" }} bg='rgba(0,0,0,0.04)' pt='10px' pb='20px'>
            <Heading fontSize='25px'>
                Secure booking — only takes 2 minutes!
            </Heading>
            <Flex color='teal' gap='10px' alignItems='center' mt='20px'>
                <Icon as={TiTick} fontSize='25px' cursor='pointer' />
                <Text fontSize='15px' >
                    You've picked a winner! This hotel is rated {data['uitk-text 3']}/5
                </Text>
            </Flex>
            <Flex justifyContent={'space-between'} gap='10px' flexDir={{ base: "column-reverse", md: "row" }} mt='30px'>
                <CheckoutMainSection />
                <CheckoutSidebar />
            </Flex>
            <Text fontSize='14px' fontWeight={600} mt='30px' textAlign='center' px='20px' color='teal'>
                Tell us what you think
            </Text>
            <Text fontSize='14px' fontWeight={400} mt='10px' textAlign='center' px='20px' color='teal'>
                A Nomado Group Company. All Rights Reserved.
            </Text>

            <Text fontSize='20px' fontWeight={600} mt='10px' textAlign='center' px='20px' color='teal' fontFamily='cursive'>
                Nomado Travellers
            </Text>
            
        </Box>
    )
}