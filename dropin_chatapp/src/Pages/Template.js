import React from 'react'
import Navbar from '../Components/Navbar'
import DisplayArea from '../Components/DisplayArea'

const Template = ({PageInfo}) => {
  return (
    <div style={{border:"2px solid black",height:"100vh",backgroundColor:"#121212",color:"white",display:"flex",flexDirection:"column",alignContent:"center"}}>
    <Navbar/>
    <DisplayArea ToDisplay={PageInfo}/>
   </div>
  )
}

export default Template