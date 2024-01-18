import React,{useEffect, useState} from 'react'
import Navbar from '../../Components/Navbar'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.css"
import 'animate.css'
import { useNavigate } from 'react-router-dom'

const UserDataPopUp = () => {

    const Navigate = useNavigate()

    const [Reload,setReload] = useState(false)


    useEffect(() => {
        
        Swal.fire({
            title: 'Enter Your Email',
            input:'email',
            confirmButtonText: 'Next',
            showLoaderOnConfirm: true,
            allowOutsideClick:false,
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }

          }).then((result)=>{

            Swal.fire({
                title: 'Enter Your Password',
                input:'password',
                confirmButtonText: 'Next',
                showLoaderOnConfirm: true,
                allowOutsideClick:false,
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
    
              }).then((result2)=>{

                Swal.fire({
                    title: 'Are you sure?',
                    text:'Do you want to save your credential?',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Save',
                    showLoaderOnConfirm: true,
                    allowOutsideClick:false,
                    showClass: {
                        popup: 'animate__animated animate__fadeIn'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
        
                  }).then((result3)=>{

                    if (result3.isConfirmed) {

                        let timerInterval
                        Swal.fire({
                            title: 'Saving Credentials!',
                            html: 'Estimate Time Left <b></b> milliseconds.',
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                              Swal.showLoading()
                              const b = Swal.getHtmlContainer().querySelector('b')
                              timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                              }, 100)
                            },
                            willClose: () => {
                              clearInterval(timerInterval)
                            }
                          })


                          Navigate('/user/Dashboard')
    
                      }else{

                       setReload(!Reload)

                    }


                  })


              })

            

          })
        
    }, [Reload])
    


    
  return (
    <>
    <div style={{border:"2px solid black",height:"100vh",backgroundColor:"#121212",color:"white",display:"flex",flexDirection:"column",alignContent:"center"}}>
        <Navbar/>
       
    </div>
    </>
  )
}

export default UserDataPopUp