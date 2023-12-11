import { Box, Button, Typography } from '@mui/material'

import React from 'react'

const IsroData = ({name,launchDate,launchVehicle,orbitType,application,status,link}) => {
  return (
    <Box className="bg-[#E3651D] p-5 m-3 rounded-md duration-75 hover:translate-y-[-3px] hover:shadow-lg">
       {name==="" ? null : (<Typography variant='body1'><span className='font-bold'>Name</span> : {name}</Typography>) }  
       {launchDate===""?null : <Typography variant='body1'><span className='font-bold'>Launch Date</span> : {launchDate}</Typography>}  
        {launchVehicle==="" ? null : <Typography variant='body1'><span className='font-bold'>Launch Vehicle</span> : {launchVehicle}</Typography> }
       {orbitType==="" ? null : <Typography variant='body1'><span className='font-bold'>Orbit Type</span> : {orbitType}</Typography> }  
        {application==="" ? null : <Typography variant='body1'><span className='font-bold'>Application</span> : {application}</Typography>}
        {status==="" ? null : <Typography variant='body1' className='text-center font-bold'>{status}</Typography>}
        {link==="" ? null : <Button variant='contained' href={link} target='_blank'  style={{backgroundColor:"#BED754",color:"#000",marginTop:"5px"}} fullWidth >Read More</Button> }
    </Box> 
  )
}

export default IsroData