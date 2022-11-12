import { Box, Flex, chakra, Image } from "@chakra-ui/react"

export const TripCardHotel = ({ hotelData }) => {
    return (
        <Box
            maxW="xs"
            mx="auto"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
        >
            <Box px={4} py={2}>
                <chakra.h1
                    color="gray.800"
                    _dark={{
                        color: "white",
                    }}
                    fontWeight="bold"
                    fontSize="xl"
                    textTransform="uppercase"
                >
                    {hotelData?.hotel['uitk-heading']}
                </chakra.h1>
                <chakra.p
                    mt={1}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    Check-in:{hotelData?.checkin}<br />
                    Check-out:{hotelData?.checkout}<br />
                    Rooms:{hotelData?.rooms?.length}
                </chakra.p>
            </Box>

            <Image
                h={48}
                w="full"
                fit="cover"
                mt={2}
                src={hotelData?.hotel['uitk-image-media src 2']}
                alt="NIKE AIR"
            />

            <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
            >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    ${hotelData.price}
                </chakra.h1>
                <chakra.button
                    px={2}
                    py={1}
                    bg="white"
                    fontSize="xs"
                    color="gray.900"
                    fontWeight="bold"
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                        bg: "gray.200",
                    }}
                    _focus={{
                        bg: "gray.400",
                    }}
                >
                    {hotelData?.refundable ? 'Refundable' : "Non-Refundable"}
                </chakra.button>
            </Flex>
        </Box>
    )
}