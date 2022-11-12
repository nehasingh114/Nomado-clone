import { Box, Button, Checkbox, CheckboxGroup, filter, Flex, Grid, GridItem, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Ads } from "../Components/Ads"
import { Sidebar } from "../Components/Sidebar"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { getHotels } from "../redux/hotels/hotels.actions"
import {ImLocation} from "react-icons/im"
import { Link } from "react-router-dom"
import ScaleLoader from "react-spinners/ScaleLoader";
import {FaStar} from "react-icons/fa"

export const Flights = () => {
    

    return (
        <>
       
        <Box w='100%'  bg="rgb(245,245,245)">
          
        <Flex  gap='20px' bg="rgb(245,245,245)">
            <Box>
            {/* <Sidebar handleFilter={handleFilter}/> */}
            <Box bg="rgb(245,245,245)" padding="10px" paddingLeft='20px'>
                    <Text textAlign="left" fontSize="2xl" fontWeight="bold">Filter by</Text>
                    <Flex gap="80px" marginBottom="20px">
                        <Box>
                        <Text textAlign="left" fontSize="lg">Stops</Text>
                        <Stack spacing={[1, 1]} direction={['column', 'column']}>
                       
                        <Checkbox size='sm' colorScheme='green' >
                           Nonstop (7)
                        </Checkbox>
                        <Checkbox size='sm' colorScheme='green' >
                            1 Stop (64)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            2+ Stops(6)
                        </Checkbox>
                    </Stack>
                        </Box>
                        <Box>
                        <Text textAlign="left" fontSize="lg">From</Text>
                        <Stack spacing={[1, 1]} direction={['column', 'column']}>
                       
                        <Text fontSize='sm' colorScheme='green' >
                           $ 1,105
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 770
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 616
                        </Text>
                    </Stack>
                        </Box>
                    </Flex>




                    
                    <Flex gap="30px">
                        <Box>
                        <Text textAlign="left" fontSize="lg">Airlines</Text>
                        <Stack spacing={[1, 1]} direction={['column', 'column']}>
                       
                        <Checkbox size='sm' colorScheme='green' >
                           Air India (19)
                        </Checkbox>
                        <Checkbox size='sm' colorScheme='green' >
                            Turkish Airlines (14)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            Emirates (3)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            Vistara (3)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            Etihad Airways (2)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            Air Canada (1)
                        </Checkbox>
                        <Checkbox   size='sm' colorScheme='green' >
                            Air France (1)
                        </Checkbox>
                    </Stack>
                        </Box>
                        <Box>
                        <Text textAlign="left" fontSize="lg">From</Text>
                        <Stack spacing={[1, 1]} direction={['column', 'column']}>
                       
                        <Text fontSize='sm' colorScheme='green' >
                           $ 1,086
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 992
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 1,473
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 1,105
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 1,018
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 3,299
                        </Text>
                        <Text fontSize='sm' colorScheme='green' >
                            $ 1,386
                        </Text>
                    </Stack>
                        </Box>
                    </Flex>

                   
                    <Text textAlign='left' marginTop="20px" fontSize="xl">Departure time</Text>
                    <Grid templateAreas={`"one two "
                                          "three four "
                    `}
                    // gridTemplateRows={'1fr 1fr '}
                    // gridTemplateColumns={'1fr 1fr'}
            
                    gap='1'
                    color='blackAlpha.700'
                    fontWeight='bold'
                    >
                     <GridItem bg="white" borderRadius="5px"  area={'one'}><Text textAlign="center" fontSize='sm'>Early Morning</Text></GridItem>
                     <GridItem bg="white"   borderRadius="5px"     area={'two'}><Text textAlign="center" fontSize='sm'>Morning</Text></GridItem>
                     <GridItem bg="white"    borderRadius="5px"     area={'three'}><Text textAlign="center" fontSize='sm'>Afternoon</Text></GridItem>
                     <GridItem bg="white"   borderRadius="5px"     area={'four'}><Text textAlign="center" fontSize='sm'>Evening</Text></GridItem>
                     
                    </Grid>
                    <Text textAlign='left' marginTop="20px" fontSize="xl">Payment type</Text>
                    <Stack spacing={[1, 1]} direction={['column', 'column']}>
                    <Checkbox value="Fully refundable"  size='md' colorScheme='green' >
                            Fully refunded
                        </Checkbox>
                        <Checkbox size='md' colorScheme='green' >
                            Reverse now, pay later
                        </Checkbox>
                      
                    </Stack>
                   
                </Box>
               
            </Box>
            <Spacer/>
          
            <Box marginTop='20px'>
                 
               <Flex bg='white' padding='20px' gap='30px'>
                <Box>
                    <Text fontWeight='bold' fontSize='20px'>2:30am - 4:05pm</Text>
                    <Text fontSize='xs'>Delhi (DEL) - London (LHR)</Text>
                    <Flex gap='10px'>
                        <Box boxSize='15px'>
                        <Image  src="https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/KC_sq.svg"/>
                        </Box>
                        <Text fontSize='xs'>  Air Astana</Text>
                    </Flex>
                  
                </Box>
                <Spacer/>
                <Box>
                    <Text fontSize='xs'>19h 5m (2 stops)</Text>
                    <Text fontSize='xs'>4h 10m in Almaty (ALA) - 1h in Aktau (SCO)</Text>
                </Box>
                <Spacer/>
                <Box>
                    <Text textAlign='right' fontWeight='bold' fontSize='25px'>$615.54</Text>
                    <Text textAlign='right' fontSize='xs'>Rounding per traveler</Text>
                    <Flex gap='10px'>
                        <Box boxSize='15px'>
                            <Image src="https://a.travel-assets.com/egds/marks/brands/orbitz/rewards.svg"/>
                        </Box>
                        <Text textAlign='right' fontSize='xs'>Earn $6.16 Orbucks</Text>
                    </Flex>
                    
                </Box>
               </Flex>
                
              
            </Box>

            <Spacer/>
            <Box>
            <Image marginBottom="20px" src="https://tpc.googlesyndication.com/simgad/2791718960777221954?"/>
            <Image src="https://tpc.googlesyndication.com/simgad/7473800060073313793?"/>
            </Box>
          
        </Flex>
           
        </Box>
        </>
    )
}
