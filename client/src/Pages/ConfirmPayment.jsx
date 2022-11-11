import { Box, Heading } from '@chakra-ui/react';

export const ConfirmPayment = () => {

    return (
        <Box px={{ base: "10px", sm: "20px", lg: "50px", xl: "80px" }} bg='rgba(0,0,0,0.04)' pt='10px'>
            <Heading fontSize={'24px'} textAlign='center'>
                We're confirming your booking...
            </Heading>
        </Box>
    )
}

//
// This could take a few minutes, so please don't refresh your browser or use the back button.