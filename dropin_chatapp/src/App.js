import React,{useEffect} from 'react'
import Home from "./Pages/Home/Home"
import {Routes,Route} from "react-router-dom"
import WebFont from 'webfontloader'
import SignUp from './Pages/SignUp/SignUp'
import OTP_Page from "./Pages/OTPpage/OTPpage.js"
import BioData from "./Pages/BioData/BioData.js"
import Activation from "./Pages/Activation/Activation.js"
import UserDataPopUp from "./Pages/UserDataPopUp/UserDataPopUp.js"
import ActiveCalls from './Pages/ActiveCalls/ActiveCalls.js'


const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito','Droid Sans', 'Droid Serif'],
        
      }
    });
  }, [])
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path = "/signup/otpVerification" element={<OTP_Page/>}/>
      <Route path = "/signup/otpVerified/newUser/data" element={<BioData/>}/>
      <Route path="/newUser/Activating" element={<Activation/>}/>
      <Route path='/newUser/Activation/popUp'  element={<UserDataPopUp/>}/>
      <Route  path="/user/activeCalls" element={<ActiveCalls/>}/>
    </Routes>
    </>
  )
}

export default App