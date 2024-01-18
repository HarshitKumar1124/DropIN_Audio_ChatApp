import React from 'react'
import Navbar from '../../Components/Navbar'
import { Typography } from '@material-ui/core'
import { Button }from '@material-ui/core'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SearchIcon from '@material-ui/icons/Search';
import ActiveRoomCard from "../../Components/ActiveRoomCard.jsx"


const ActiveCalls = () => {

  const svgCss = {margin:'0.5rem 0.7rem'}

  return (
      <>
      <div style={{border:"2px solid black",minHeight:"100vh",backgroundColor:"#121212",color:"white",display:"flex",flexDirection:"column",alignContent:"center"}}>
       <Navbar/>
       <div style={{border:'2px solid green',height:'100%',display:'flex',justifyContent:'center'}}>

           <div style={{border:'2px solid yellow',width:'90%',height:'100%',display:'flex',flexDirection:'column'}}>

            
            <div style={{border:'2px solid green',display:'flex',justifyContent:'space-between',margin:'1rem 0'}}>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography style={{margin:'1rem'}}>All voice rooms</Typography>
                <p style={{display:'flex',alignItems:'center',margin:'1rem',backgroundColor:'#262626',borderRadius:'1rem'}} ><SearchIcon style={svgCss}/> <input type="text" style={{color:'white',backgroundColor:'transparent',outline:'none',border:'none',height:'100%',borderRadius:'1rem'}}/></p>
              </div>
              <Button style={{backgroundColor:'#20BD5F',color:'white',display:'flex',alignItems:'center',margin:'1rem'}}><RecordVoiceOverIcon style={svgCss}/>Start a room</Button>
            </div>
            <div style={{border:'2px solid red',display:'flex',flexWrap:'wrap'}}>
            <ActiveRoomCard/>
            <ActiveRoomCard />
            <ActiveRoomCard />
            <ActiveRoomCard />
            <ActiveRoomCard />
            </div>

           </div>


       </div>
      </div>
      </>
  )
}

export default ActiveCalls