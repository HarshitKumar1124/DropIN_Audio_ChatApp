
import { useNavigate } from 'react-router-dom';
import React,{useRef} from 'react'

const ActiveRoomCard = () => {
    const Navigate = useNavigate()

    const Slider = useRef()

    const Hover=(e)=>{
        e.target.style.cursor = "pointer"
        Slider.current.style.top = "0"
        Slider.current.style.transition = "top 0.5s ease"
        
    }
    const Return=(e)=>{
        e.target.style.cursor = "none"
        Slider.current.style.top = "-101%"
        Slider.current.style.transition = "top 0.5s ease"
    }

  return (
    <div style={{position:'relative',width:'17%',height:'8rem',backgroundColor:'#1D1D1D',overflow:'hidden',borderRadius:'1rem',border:'2px solid #1D1D1D',margin:'1rem'}} onMouseOver={Hover} onMouseOut={Return}  onClick={()=>Navigate('/user/room/${id}')}>
        <div ref={Slider} style={{border:'2px solid orange',position:'absolute',width:'100%',height:'100%',top:'-101%',backgroundColor:'rgba(255, 255, 255, 0.2)', borderRadius:'1rem',border: '1px solid rgba(255, 255, 255, 0.3)',boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',backdropFilter:'blur(1px)'}}></div>ActiveRoomCard</div>
  )
}

export default ActiveRoomCard