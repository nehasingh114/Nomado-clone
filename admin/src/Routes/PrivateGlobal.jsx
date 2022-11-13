
import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AdminData } from '../Context/AdminDataContext';

function PrivateGlobal({children}) {
   const {adata}=useContext(AdminData)
   console.log(adata)
    if(adata.role==="admin"){
        return children
    }  
}

export default PrivateGlobal;