import React from 'react'
import logo from "../Assets/Logo.svg"

const Navbar = () => {
  return (
    <>
   
      <div style={{boxShadow:"0 -5px 10px black",display:"flex",justifyContent:"space-between"}}>
        <div style={{border:"2px solid red",display:"flex",padding:"0 0.5rem",gap:"0.5rem"}} >
            <img src={logo} alt="logo" title="logo" style={{width:"1.5rem"}}/>
            <p>Codershouse</p>
        </div>

        <div style={{border:"2px solid red",display:"none",padding:"0 0.5rem",gap:"0.5rem"}} >
            <img src={logo} alt="logo" title="logo" style={{width:"1.5rem"}}/>
            <p>Harry Knocker</p>
        </div>
      </div>
    
    </>
  )
}

export default Navbar