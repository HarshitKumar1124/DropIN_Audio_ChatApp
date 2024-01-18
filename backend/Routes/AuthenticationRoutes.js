const express = require('express')
const router = express.Router();

const {SendOTP,VerifyOTP} = require('../Controllers/AuthenticateController.js')

router.post('/send-otp',SendOTP);

router.post('/verify-otp',VerifyOTP);


module.exports = router;