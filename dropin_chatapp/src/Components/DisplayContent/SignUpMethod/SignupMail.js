import React, { useState } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link,useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Email from "../../../Assets/Email.svg"



const SignUpContent = () => {

   
    const Navigate = useNavigate()

    const [EmailValue,setEmailValue] = useState('')
    const [ViaMail,setViaMail] = useState(false)

   const HoverChangeOn = (e) =>{
    e.target.style.cursor = "pointer"
    e.target.style.transform = "scale(1.1)"
    e.target.style.transition = "transform 1s ease 1s"
    
   }

    const HoverChangeOut = (e)=>{

        e.target.style.transform = "scale(1)"
        e.target.style.transition = "transform 1s ease 0s"

    }

    const HandleHook = (e)=>{
     setEmailValue(e.target.value)
    }

  return (
    <div style={{border:"2px solid green",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",}}>
    <div  style={{border:"2px solid blue",display:"flex",justifyContent:"center",margin:"1rem 0rem"}}>
       
        <img src={Email} title="Email" alt="Email" style={{width:"1.5rem",margin:"0 0.5rem"}}/>
        <Typography>SignUp Enter your Email ID</Typography>
    </div>
    <p  style={{border:"2px solid yellow",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"#262626",borderRadius:"0.5rem",padding:"0.5rem 1rem"}}>
        <input type="email" style={{outline:"none",backgroundColor:"#262626",color:"#C4C5C5",border:"none",padding:'0.3rem 0.5rem',borderRadius:"0.5rem"}}  placeholder='Example@gmail.com' value={EmailValue} onChange={HandleHook}/>
    </p>
    <Link to="/signup/otpVerification"  style={{backgroundColor:"#07F",borderRadius:"1.4rem",padding:"0.6rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white",textDecoration:'none',width:"15%"}} onMouseOver={HoverChangeOn} onMouseOut={HoverChangeOut}> Next <ArrowForwardIcon style={{position:"relative",top:"2px",margin:"0 0.25rem"}}/></Link>
    <p  style={{border:"2px solid red",color:"#C4C5C5",fontWeight:"400",width:"70%",textAlign:"center"}}>By entering your number, you are agreeing to our Terms of Service and Privacy Policy. <span style={{fontWeight:"700",cursor:"pointer",color:"dodgerblue"}} onClick={()=> Navigate('/signin')}>Sign in</span></p>
    </div>
  )
}

export default SignUpContent