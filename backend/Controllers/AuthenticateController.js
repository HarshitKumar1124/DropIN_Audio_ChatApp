const otpService = require('../Services/otpService')
const userService = require('../Services/userService.js')
const tokenService = require('../Services/tokenService.js')
const fs = require('fs')


exports.SendOTP = async(req,res)=>{

    console.log('sendotp k liye aaya hai',req.body)

    const phone = req.body.phone;

    if(!phone)   // if phone value is empty
    {
        console.log('phone is',phone) 
        //here phone is not getting parsed fromjson to Object because
        // we have not use body-parser
        res.status(400).send({
            success:false,
            message:"Phone fill is required!"
        })
    }

    // generating OTP
    const otp = await otpService.GenerateOTP();


    //Expiring time scheduling
    const timeLimit = 1000 * 60 * 3; // i.e. 3 minutes

    const expireTime = Date.now() + timeLimit;

    const data = `${expireTime}${timeLimit}${otp}`


      // hasing OTP
      const hash = await otpService.HashOTP(data)


     // send OTP to Phone on SMS using Twilio       Twilio Recovery Code - JVRAD2M2ACSLHWHMLBKRFKSA
     try{

        await otpService.sendOTP(phone,otp)

        res.send({
            success:true,
            otp:otp,
            hashString:hash,
            expireTime,
            message:"OTP sent successfully!"
        })


     }catch(error)
     {
        console.log(`unable to send OTP ${error}`)

        res.send({
            success:false,
            message:"OTP sending failed!"
        })

     }
   
}



// verifying OTP
exports.VerifyOTP = async (req,res)=>{

    const {phone,hashString,otp,expireTime} = req.body;

    if(!phone || !hashString || !otp || !expireTime)
    {
        res.status(400).send({
          message:'All fields are not provided!'
        })
    }

    if(Date().now > expireTime)
    {
        res.status(400).send({
            verify:false,
            message:'OTP Time Expired!'
        })
    }


    const timeLimit = 1000 * 60 *3   // 3 minutes
    const data = `${expireTime}${timeLimit}${otp}`

   const Isverified = otpService.verifyOTP(hashString,data)

   if(!Isverified)
   {
     
       res.status(400).send({
        verify:false,
        message:'Invalid OTP!'
        })
    }


    // Create Non Activated Account. Thus connecting Database.

      try{


            let user = await userService.findUser({phone});

            console.log("user search kiya",user.length)
            console.log(!user)

            if(user.length==0){

                //createUser

                console.log("creating user")

                user = await userService.createUser({phone})

                console.log("creating user",user)

                const accessToken = await tokenService.GenerateToken({
                    _id:user._id,
                    account_activate:false
                })

                console.log('accesstoken',accessToken)


                //  not stored accesscode
             

            
                res.status(200).send({
                    verify:true,
                    accessToken,
                    message:"OTP Verified and Account Created!"
                })


            }
            else{
                res.status(400).send({
                    verify:true,
                    message:'Account credentials are already in use! Try again!'
                })
            }
        

           


    }catch(error)
    {
        res.status(500).send({
            message:`Some database error ${error}`
        })
    }
    

}