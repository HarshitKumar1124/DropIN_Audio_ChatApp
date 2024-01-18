import { Typography } from '@mui/material'
import React from 'react'
import logo from "../../Assets/Logo.svg"
import {useNavigate } from 'react-router-dom'
import NearMeIcon from '@material-ui/icons/NearMe';
import { Link } from 'react-router-dom';

const HomeContent = () => {

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

  return (
    <>
    <div style={{border:"2px solid green",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",}}>
        <div  style={{border:"2px solid blue",display:"flex",justifyContent:"center",margin:"1rem 0rem"}}>
            <img src={logo} title="logo" alt="logo" style={{width:"1.5rem",margin:"0 0.5rem"}}/>
            <Typography>Welcome to Codershouse!</Typography>
        </div>
        <p  style={{border:"2px solid yellow",padding:"2rem 3rem",color:"#C4C5C5",textAlign:"center",lineHeight:'2rem'}}>We are working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we are adding people gradually to make sure nothing breaks :</p>
        <Link to="/signup"  style={{backgroundColor:"#07F",borderRadius:"1.4rem",padding:"0.6rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white",textDecoration:'none'}} onMouseOver={HoverChangeOn} onMouseOut={HoverChangeOut}>Get your username <NearMeIcon style={{position:"relative",top:"2px",margin:"0 0.15rem"}}/></Link>
        <p  style={{border:"2px solid red",color:"#0077FF",fontWeight:"400"}}>Have an invite text? <span style={{fontWeight:"700",cursor:"pointer"}} onClick={()=> Navigate('/signin')}>Sign in</span></p>
    </div>
    </>
  )
}

export default HomeContent