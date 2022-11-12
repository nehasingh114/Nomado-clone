import { Box, Checkbox, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Ads } from "../Components/Ads"
import { Sidebar } from "../Components/Sidebar"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react"
import { getHotels } from "../store/hotels/hotels.actions"
import {ImLocation} from "react-icons/im"

export const Hotels = (text) => {
console.log(text);
    const {loading,data}=useSelector((store)=>store.hotels)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getHotels())
    },[dispatch])
console.log(data);
    return (
        <>
        <Box w='100%'  bg="rgb(245,245,245)">
        <Flex  gap='30px' bg="rgb(245,245,245)">
            <Box>
            <Sidebar/>
            </Box>
            <Spacer/>
            <Box marginTop='20px'>
                {
                    data.map((hotel)=>(
                        <Flex  key={hotel._id} marginTop='20px'>
                        <Box border='1px solid' w='40%' >
                            <Image  objectFit='cover'  src={hotel["uitk-image-media src 2"]} alt="1"/>
    
                        </Box>
                        <Box w='60%' bg='white' padding="10px">
                            <Text textAlign="left" fontSize="20px" fontWeight="bold">{hotel["uitk-heading"]}</Text>
                            <Flex>
                                <Box paddingTop='5px'><ImLocation/></Box>
                                <Box marginLeft='10px' ><Text textAlign="left" >{hotel["uitk-text"]}</Text></Box>
                            </Flex>
                            
                          
                            <Flex marginTop="20px">
                                <Box>
                                    <Text textAlign="center" borderRadius='5px' color='white' bg='green'>{hotel['uitk-text 2']}</Text>
                                    <Text textAlign="left" color='green'>Reserve now, pay later</Text>
                                    <Text textAlign="left">{hotel['uitk-text 3']}{hotel['uitk-text 4']} {hotel['uitk-text 6']}</Text>
                                    <Text textAlign="left">{hotel['uitk-text 5']}</Text>
                                </Box>
                                <Spacer/>
                                <Box paddingTop='20px'>
                                    <Text textAlign="left">{hotel["uitk-text 8"]}</Text>
                                    <Text textAlign="left">{hotel["uitk-text 9"]}</Text>
                                </Box>
                            </Flex>
                            
                        </Box>
                    </Flex>
                    ))
                }
                
              
            </Box>
            <Spacer/>
            <Box>
            <Ads/>
            </Box>
          
        </Flex>
           
        </Box>
        </>
    )
}
{/* <Flex  >
                    <Box border='1px solid' w="40%" >
                        <Image  src="https://images.trvl-media.com/hotels/3000000/2370000/2369900/2369850/1ecc54fd.jpg?impolicy=resizecrop&rw=455&ra=fit" alt="1"/>

                    </Box>
                    <Box w='60%' bg='white' padding="10px">
                        <Text textAlign="left" fontSize="20px" fontWeight="bold">Knights Inn Brooklyn Sunset Park</Text>
                        <Text textAlign="left" >1.5-star Property</Text>
                        <Text textAlign="left" >11.24 mi from john f intl</Text>
                        <Flex marginTop="20px">
                            <Box>
                                <Text textAlign="left">Fully refundable</Text>
                                <Text textAlign="left">Reserve now, pay later</Text>
                                <Text textAlign="left">3.1/5 (583 reviews)</Text>
                            </Box>
                            <Spacer/>
                            <Box>
                                <Text textAlign="left">$161</Text>
                                <Text textAlign="left">$191 total</Text>
                            </Box>
                        </Flex>
                        
                    </Box>
                </Flex> */}