const crypto = require('crypto')


const sms_sid = process.env.SMS_SID;
const sms_auth = process.env.SMS_Auth;

// use to send the otp on phone
const twilio = require('twilio')("ACab014494846d4dae8f8415adac76aa18","ead8ad371841ba8b2e4e47e2a3b7abe7",{
    lazyLoading:true
})



class otpService {

   async GenerateOTP(){

        const randomOTP = crypto.randomInt(1000,9999); // generate random number between range
        return randomOTP;

    }

    async HashOTP(otp){

        //sha256 is Hashing Algorithm and HashSecret is random string
        const hashString = crypto.Hmac('sha256',process.env.HashSecret).update(otp).digest('hex');
        console.log('otp Hashing: ',hashString);
        return hashString;

    }


    async sendOTP(phone,otp){
        console.log('sending otp to ',phone)
        console.log('otp is : ',otp)
        return await twilio.messages.create({
            to:phone,
            from:process.env.SMS_FROM,
            body:`Your CoderHouse Project OTP is ${otp}`
        })

    }
}


module.exports = new otpService();