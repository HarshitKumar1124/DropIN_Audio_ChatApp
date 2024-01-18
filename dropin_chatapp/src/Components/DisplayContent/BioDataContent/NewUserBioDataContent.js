import React, { useState } from 'react'
import FullAndUserName from "./FullAndUserName"
import { Typography } from '@mui/material'
import { Stepper,Step,StepLabel,MobileStepper,Button } from '@material-ui/core'
import {KeyboardArrowRight,KeyboardArrowLeft} from "@material-ui/icons"
import { useNavigate } from 'react-router-dom'


const NewUserBioDataContent = () => {

    const [activeStep,setActive] = useState(0)

    const Navigate = useNavigate()

    const steps = [
        {
            index:1,
            label: <Typography>Fullname</Typography>
        },
        {
            index:2,
            label:<Typography>Profile Pic</Typography>
        },
        {
            index:3,
            label:<Typography>Username</Typography>
        }
    ]



    const handleNext = ()=>{

       


        if(activeStep!==2)
        setActive(activeStep+1);
        else
        Navigate('/newUser/Activating')
    }

    const handleBack = ()=>{
        setActive(activeStep-1);
    }


  return (
    <>

    <Stepper activeStep={activeStep} alternativeLabel={false} style={{borderRadius:"0.7rem",backgroundColor:'rgba(255, 255, 255, 1)',position:"absolute",top:'-5rem',width:'91%',boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)"}}>
    
        {steps.map(({label,index}) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
    </Stepper>


    {(activeStep===0)?<FullAndUserName 
        heading='What’s your full name?'
        Placeholder='Your Name'
        Message='People use real names at codershouse.'
        Field = 'FullName'
    />:<></>}

    {(activeStep===1)?<FullAndUserName 
        heading='Profile?'
        Placeholder='Your Name'
        Message='People use real names at codershouse.'
        Field = 'Profile'
    />:<></>}

    {(activeStep===2)?<FullAndUserName 
        heading='Pick a username'
        Placeholder='@'
        Message='Username can be used for the login'
        Field = 'UserName'
    />:<></>}


    <MobileStepper
      variant="dots"
      steps={3}
      style={{position:"absolute",bottom:'0rem',width:'97%',backgroundColor:'rgba(255,255,255,1)',borderRadius:"0 0 0.7rem 0.7rem"}}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small"  onClick={handleNext} disabled={activeStep === 3}  >
            
          Next
          <KeyboardArrowRight />
    
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}   >
            
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
       

    </>
  )
}

export default NewUserBioDataContent