import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
// import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Allroutes from './Routes/Allroutes';
import Loader from './Routes/Loader';
import Private from './Routes/Private';
import PrivateGlobal from './Routes/PrivateGlobal';

function App() {
  return (
   <Box display='flex' gap="20px">
    <Allroutes/>
    <PrivateGlobal>
      <Navbar/>
      <Sidebar/>
    </PrivateGlobal>
     
     
   </Box>
     
    
  );
}

export default App;
