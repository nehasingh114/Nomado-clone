import React from "react";
import {
  Box,
  Text,
  Button,
  Center,
  Input,
  Stack,
  Checkbox,

} from "@chakra-ui/react";
const Signup = () => {
  return (
    <Box
      w="30%"
      color="white"
      box-shadow="10px 10px 5px #aaaaaa"
      p={20}
      m="auto"
    >
      <Text pt="0px" mt="0px" fontWeight="bold" color="black">
        Create an account
      </Text>
      <Stack spacing={3} color="black">
        <Input placeholder="  Email address" size="md" color="black" />
        <Input placeholder="First name" size="md" />
        <Input placeholder="Last name" size="md" />
        <Input placeholder="Password" size="md" />
      </Stack>
      <Checkbox pt="20px" color="gray" defaultChecked>
        Keep me signed in
      </Checkbox>

      <Text pt="10px" color="gray" fontSize="10px">
        Selecting this checkbox will keep you signed into your account on this
        device until you sign out. Do not select this on shared devices.
      </Text>

      <Text pt="10px" color="gray" fontSize="10px">
        By creating an account, I agree to the Orbitz Terms and Conditions,
        Privacy Statement and Orbitz Rewards Terms and Conditions.
      </Text>
      <Button w="100%" colorScheme={"pink"} mt="30px">
        Continue
      </Button>


     <center> <Text pt="30px" color="gray" fontSize="10px">
Already have an account? 
      </Text>
      </center>
    </Box>
  );
};

export default Signup;
