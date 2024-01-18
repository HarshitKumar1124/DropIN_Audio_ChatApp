import React, { useState,useEffect } from 'react'
import { CircularProgress } from '@mui/joy';
import { Typography } from '@mui/material';
import ReportIcon from '@material-ui/icons/Report';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { useNavigate } from 'react-router-dom';



const ActivationContent = () => {

    const [Progress,setProgress] = useState(0);
    const Navigate = useNavigate()
    
   useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? Navigate('/newUser/Activation/popUp') : prevProgress + 10));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    const colors = ['danger','warning','primary','success','success']
    const colors_val = ['red','orange','dodgerblue','green']
    

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
        
        <Typography style={{position:'absolute',fontSize:'0.9rem',top:'60%'}}>{Progress}%</Typography>
        
        
        <CircularProgress variant="plain" size="lg" style={{position:'absolute',boxShadow:`0 0 10px ${colors_val[Math.trunc(Progress/25)]}`}} determinate value={Progress} color={colors[Math.trunc(Progress/25)]}>
        {(Progress>0 && Progress<=25)?<ReportIcon style={{color:"danger"}}/>:<></>}
        {(Progress>25 && Progress<=50)?<ReportProblemIcon style={{color:"warning"}}/>:<></>}
        {(Progress>50 && Progress<=70)?<AutorenewIcon style={{color:"primary"}}/>:<></>}
        {(Progress>75 && Progress<=100)?<VerifiedUserIcon style={{color:"success"}}/>:<></>}
        </CircularProgress>
        
    </div>
  )
}

export default ActivationContent