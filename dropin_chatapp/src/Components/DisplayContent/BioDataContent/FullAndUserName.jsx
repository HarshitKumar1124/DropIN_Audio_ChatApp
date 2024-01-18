import React, { useState } from 'react'
import Smily from "../../../Assets/Smily.svg"
import { Typography } from '@material-ui/core'


const FullAndUserName = ({heading,Placeholder,Message,Field}) => {

    const [Name,setName] = useState('')

    const HandleHook = (e)=>{
    
       setName(e.target.value)
        // storing input items and data in localStote of browser
        window.localStorage.setItem(Field,e.target.value)
        

    }

    
    

  return (
    <>
     <div style={{border:"2px solid green",width:"100%",height:"86%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",}}>
    <div  style={{border:"2px solid blue",display:"flex",justifyContent:"center",margin:"1rem 0rem"}}>
       
        <img src={Smily} title="Smily" alt="Smily" style={{width:"1.5rem",margin:"0 0.5rem"}}/>
        <Typography>{heading}</Typography>
    </div>
    <p  style={{border:"2px solid yellow",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"#262626",borderRadius:"0.5rem",padding:"0.5rem 1rem"}}>
        <input type="text" style={{outline:"none",backgroundColor:"#262626",color:"#C4C5C5",border:"none",padding:'0.3rem 0.5rem',borderRadius:"0.5rem"}}  placeholder={Placeholder} value={Name} onChange={HandleHook}/>
    </p>

    <p  style={{border:"2px solid red",color:"#C4C5C5",fontWeight:"400",width:"45%",textAlign:"center",fontSize:"0.8rem"}}>{Message}</p>


    </div>
    </>
  )
}

export default FullAndUserName