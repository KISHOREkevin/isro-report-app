import React, { useEffect, useState } from 'react'
import IsroData from './IsroData'
import { Box,Grow } from '@mui/material'
import "../App.css";
import axios from 'axios';
const IsroDatum = () => {
    const apiurl = "https://services.isrostats.in/api/spacecraft";
    let [datum,setDatum] = useState([]);
    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await axios.get(apiurl);
            let data = response.data;
            setDatum(data);
        }
        fetchData();
    },[]);
  return (
    
    <>

    <Grow in>
    
        {datum.length===0 ?
        <h1 className='mt-[300px] text-[30px] text-white text-center'>Loading ...</h1> : 
        <Box className="bg-[#750E21] p-3 rounded-md h-[600px] overflow-y-scroll scrollbar-hide">
            {datum.map((data)=>{
                    return <IsroData key={data._id} name={data.name} launchDate={data.launchDate} launchVehicle={data.launchVehicle} orbitType={data.orbitType} application={data.application} link={data.link} status={data.missionStatus}/> 
            })} 
        </Box>
        }
        
        
    
    </Grow>
    </>
  )
}

export default IsroDatum