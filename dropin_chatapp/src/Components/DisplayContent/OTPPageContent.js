import React,{useState} from 'react'
import Lock from "../../Assets/Lock.svg"
import { Link,useNavigate } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import OtpInput from 'react-otp-input';


const OTPPageContent = () => {

    const Navigate = useNavigate()

    const HoverChangeOn =(e)=>{
        e.target.style.cursor = "pointer"
        e.target.style.transform = "scale(1.1)"
        e.target.style.transition = "transform 1s ease 0s"

    }

    const HoverChangeOut = (e)=>{

        e.target.style.transform = "scale(1)"
        e.target.style.transition = "transform 1s ease 0s"

    }


    const [otp, setOtp] = useState('');




  return (
    <div style={{border:"2px solid green",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",}}>
        <div  style={{border:"2px solid blue",display:"flex",justifyContent:"center",margin:"1rem 0rem"}}>
            <img src={Lock} title="Lock" alt="Lock" style={{width:"1rem",margin:"0 0.5rem"}}/>
            <Typography>Enter the code we just texted you</Typography>
        </div>

        <p  style={{border:"2px solid yellow",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",borderRadius:"0.5rem",padding:"0.5rem 1rem"}}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span style={{margin:"0 0.5rem"}}>--</span>}
          renderInput={(props)=><input {...props}  />}
        />
       </p>
        <p  style={{border:"2px solid red",color:"#C4C5C5",fontWeight:"400"}}>Didn’t receive?  <span style={{fontWeight:"700",cursor:"pointer",color:"#07f"}} onClick={()=> Navigate('/signup/otpVerification')}>Tap to resend</span></p>
        <Link to="/signup/otpVerified/newUser/data"  style={{backgroundColor:"#07F",borderRadius:"1.4rem",padding:"0.6rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white",textDecoration:'none'}} onMouseOver={HoverChangeOn} onMouseOut={HoverChangeOut}>Next <ArrowForwardIcon style={{position:"relative",top:"2px",margin:"0 0.15rem"}}/></Link>
        
    </div>
  )
}

export default OTPPageContent