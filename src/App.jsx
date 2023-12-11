import React from 'react'
import IsroDatum from './Components/IsroDatum';
import { Box, Typography } from '@mui/material';
import "./App.css";
const App = () => {
  return (
    <>
    <Typography variant='h4' className='bg-[#750E21] text-white text-center'>Isro Spacecraft Launches</Typography>
    <Box className=" flex justify-center mt-3">
      
    <Box className="" >  
          <IsroDatum />
    </Box>
    </Box>
    </>
  )
}

export default App