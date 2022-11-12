import { Box, Flex, Heading, Input, Text, Icon, Checkbox, Button, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { BiHide, BiShow } from "react-icons/bi"
import { Logo } from "../Components/Logo"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {signupAPI } from "../redux/auth/auth.action"

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "", password: "", keepSigned: true });
  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const toast = useToast();

  const handleUser = (e) => {
    let { name, value } = e.target
    if (!value) value = e.target.isChecked
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, keepSigned } = userData;
    if (firstName.length === 0 || lastName.length === 0) {
      toast({
        title: "Name is required",
        duration: 3000,
        status: 'error',
        isClosable: true
      })
    }
    else if (email.length === 0) {
      toast({
        title: "Email is required",
        duration: 3000,
        status: 'error',
        isClosable: true
      })
    }
    else if (password.length === 0) {
      toast({
        title: "Password is required",
        duration: 3000,
        status: 'error',
        isClosable: true
      })
    }
    else if (!email.includes('@') || email.includes('@.') || email.length < 6) {
      toast({
        title: "Enter a valid email",
        duration: 3000,
        status: 'error',
        isClosable: true
      })
    }
    else if (password.length < 8) {
      toast({
        title: "Password must have at least 8 characters.",
        duration: 3000,
        status: 'error',
        isClosable: true
      })
    }
    else {
      dispatch(signupAPI({ firstName, lastName, email, password, keepSigned })).then((res) => {
        if (res.message === 'Signup error.') {
          toast({
            title: "User is already registered.",
            duration: 3000,
            isClosable: true,
            status: "error"
          })
        }
        else if (res.message === 'Signup success.') {
          toast({
            title: "Signup Successful.",
            duration: 3000,
            isClosable: true,
            status: "success",
            variant: "subtle"
          })
          setTimeout(() => {
            navigate('/')
          }, 2000)
        }
      })
    }

  }

  return (
    <Box>
      <Flex justifyContent={'center'} p='10px 20px' borderBottom={'1px solid rgba(0,0,0,0.2)'}>
        <Link to='/'>
          <Logo iconColor={'teal'} w='200px' h='40px' />
        </Link>
      </Flex>
      <Box margin='0px auto' p='20px 10px' w={{ base: "100%", sm: "250px", md: "430px" }}>
        <Heading fontSize='23px'>
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box p='2px 10px' border='2px solid gray' mt='20px'>
            <Text fontSize='12px' fonTWeight={500} color='GrayText'>First Name</Text>
            <Input variant='unstyled' p='0px' mt='0px' value={userData.firstName} onChange={handleUser} name='firstName' />
          </Box>
          <Box p='2px 10px' border='2px solid gray' mt='20px'>
            <Text fontSize='12px' fonTWeight={500} color='GrayText'>Last Name</Text>
            <Input variant='unstyled' p='0px' mt='0px' value={userData.lastName} onChange={handleUser} name='lastName' />
          </Box>
          <Box p='2px 10px' border='2px solid gray' mt='20px'>
            <Text fontSize='12px' fonTWeight={500} color='GrayText'>Email address</Text>
            <Input variant='unstyled' p='0px' mt='0px' value={userData.email} onChange={handleUser} name='email' />
          </Box>
          <Box p='2px 10px' border='2px solid gray' mt='20px'>
            <Text fontSize='12px' fonTWeight={500} color='GrayText'>Password</Text>
            <Flex>
              <Input variant='unstyled' p='0px' mt='0px' type={!showPass ? 'password' : "text"} value={userData.password} onChange={handleUser} name='password' />
              <Icon as={showPass ? BiHide : BiShow} onClick={() => setShowPass(prev => !prev)} />
            </Flex>
          </Box>
          <Checkbox color='GrayText' mt='20px' borderColor='black' isChecked={userData.keepSigned} name='keepSigned' onChange={handleUser}>
            Keep me signed in.
          </Checkbox>
          <Text fontSize='12.5px' color='GrayText' mt='20px'>
            Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.
          </Text>
          <Text mt='20px' fontSize='14px'>
            By signing up, I agree to the Orbitz Terms and Conditions, Privacy Statement and Orbitz Rewards Terms and Conditions.
          </Text>
          <Button w='100%' colorScheme={'teal'} mt='30px' type='submit' isLoading={loading}>
            Continue
          </Button>
        </form>
        <Text fontSize='14px' textAlign={'center'} mt='25px'>
          Already have an account?&nbsp;<span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/signin')} >Sign In</span>
        </Text>
      </Box>
    </Box>
  )
}

export default SignUp;