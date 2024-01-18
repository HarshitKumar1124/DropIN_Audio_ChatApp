import React, { useState } from 'react'
import SignupMail from "./SignUpMethod/SignupMail"
import SignupPhone from "./SignUpMethod/SignupPhone"
import { Link } from 'react-router-dom'
import EmailIcon from '@material-ui/icons/Email'
import SmartphoneIcon from '@material-ui/icons/Smartphone'

const SignUpContent = () => {

    const [activePhone,setPhone] = useState(true)
    const [activeMail,setMail] = useState(false)

    const Toggle = ()=>{
        setMail(!activeMail)
        setPhone(!activePhone)
    }

  return (
   <> 
     <div style={{position:"absolute",width:"100%",display:"flex",justifyContent:"flex-end",top:"-3.5rem",left:"0.4rem"}}>
        <Link  style={{backgroundColor:`${activePhone?"#0077FF":"transparent"}`,borderRadius:"0.3rem",padding:"0.3rem 0.5rem",margin:"0 0.25rem"}} onClick={Toggle}><SmartphoneIcon style={{fontSize:"1.8rem",padding:"0.25rem",color:"white"}}/></Link>
        <Link style={{backgroundColor:`${activeMail?"#0077FF":"transparent"}`,borderRadius:"0.3rem",padding:"0.3rem 0.5rem",margin:"0 0.25rem"}} onClick={Toggle}><EmailIcon style={{fontSize:"1.8rem",padding:"0.25rem",color:"white"}}/></Link>
    </div>
  
   {
    (activeMail)?<SignupMail/>:<SignupPhone/>
   }
   </>
  )
}

export default SignUpContent