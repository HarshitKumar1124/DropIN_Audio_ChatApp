import React, { useState } from 'react'
import HomeContent from './DisplayContent/HomeContent'
import SignUpContent from './DisplayContent/SignUpContent'
import OTPPageContent from "./DisplayContent/OTPPageContent.js"
import NewUserBioDataContent from "./DisplayContent/BioDataContent/NewUserBioDataContent.js"
import ActivationContent from "./DisplayContent/ActivationContent.js"


const DisplayArea = ({ToDisplay}) => {


  return (
    <>

    

    <div style={{border:"2px solid red",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
       <div style={{backgroundColor:"#1D1D1D",height:"58%",width:"33%",borderRadius:"1rem",position:"relative"}}>

      
        
        {(ToDisplay==="HomePage") ? <HomeContent/> : <></>}
        {(ToDisplay==="Signup") ? <SignUpContent/> : <></>}
        {(ToDisplay==="OTP_Page") ? <OTPPageContent/> : <></>}
        {(ToDisplay==="NewUserBioData") ? <NewUserBioDataContent/> : <></>}
        {(ToDisplay==="Activation") ? <ActivationContent/> : <></>}
       
        
        
       </div>
    </div>
    </>
    
  )
}

export default DisplayArea