import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
// import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Allroutes from './Routes/Allroutes';

function App() {
  return (
   <Box display='flex' gap="20px">
    <Navbar/>
     <Sidebar/>
     <Allroutes/>
   </Box>
     
    
  );
}

export default App;
