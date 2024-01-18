const crypto = require('crypto')


const sms_sid = process.env.SMS_SID;
const sms_auth = process.env.SMS_Auth;

// use to send the otp on phone
const twilio = require('twilio')("AC244ea1bcad343781fad52e6726d42116","84443a109cbcb277c6913cc90eec4d45",{
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
        console.log('from : ',process.env.SMS_FROM)
        return await twilio.messages.create({
            to:phone,
            from:process.env.SMS_FROM,
            body:`Your CoderHouse Project OTP is ${otp}`
        })

    }

    async verifyOTP(hashString,data){

        const hashString_ToVerify = this.HashOTP(data) 

         return hashString==hashString_ToVerify;

    }
}


module.exports = new otpService();