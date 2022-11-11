import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

function Users(props) {
    return (
        <Box w="82%" ml="20%" mt="55px" pr="10px">
           <Heading fontWeight="500">Active Users</Heading>

           <Box>
            <Table mt="50px">
                <Thead>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Trips</Th>
                    <Th></Th>
                    <Th></Th>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Faizan</Td>
                        <Td>Faizan@mail.com</Td>
                        <Td>5</Td>
                        <Td><Button colorScheme="red">Delete</Button></Td>
                    </Tr>
                </Tbody>
            </Table>
           </Box>
        </Box>
    );
}

export default Users;