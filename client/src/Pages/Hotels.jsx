import { Box, Checkbox, filter, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Ads } from "../Components/Ads"
import { Sidebar } from "../Components/Sidebar"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { getHotels } from "../redux/hotels/hotels.actions"
import {ImLocation} from "react-icons/im"
import { Link } from "react-router-dom"

export const Hotels = () => {
    
    const {loading,data}=useSelector((store)=>store.hotels)
    const [filterData,setfilterData]=useState(data)
    const dispatch=useDispatch()
    
const handleFilter=(arr)=>{
   
    setfilterData(arr)
}

    useEffect(()=>{
        dispatch(getHotels()).then((res)=>setfilterData(res))
        
    },[dispatch])
//console.log(data);
console.log(filterData)
    return (
        <>
        <Box w='100%'  bg="rgb(245,245,245)">
        <Flex  gap='20px' bg="rgb(245,245,245)">
            <Box>
            <Sidebar handleFilter={handleFilter}/>
            </Box>
            <Spacer/>

            <Box marginTop='20px'>
                {
                    filterData.map((hotel)=>(
                        <Flex  key={hotel._id} marginTop='20px'>
                        <Box w='40%' >
                            <Link to={`/hotels/${hotel._id}`}>
                            <Image  objectFit='cover'  src={hotel["uitk-image-media src 2"]||hotel["uitk-image-media src"] || hotel["uitk-image-media src 3"] || hotel["uitk-image-media src 4"]} alt="1"/>
                            </Link>
                          
    
                        </Box>
                       
                        <Box w='60%' bg='white' padding="10px">
                        <Link to={`/hotels/${hotel._id}`}>
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
                                    <Text textAlign="left" fontWeight='bold'>{hotel["uitk-text 9"]}</Text>
                                </Box>
                            </Flex>
                            </Link>
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
