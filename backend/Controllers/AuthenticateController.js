const otpService = require('../Services/otpService')


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


     // send OTP to Phone on SMS using Twilio       Twilio Recovery Code -  BUNKPAWVUTGJTC7M63FU5DNQ
     try{

        await otpService.sendOTP(phone,otp)

        res.send({
            success:true,
            otp:otp,
            hashString:hash,
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
