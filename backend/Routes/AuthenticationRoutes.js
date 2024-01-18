const express = require('express')
const router = express.Router();

const {SendOTP} = require('../Controllers/AuthenticateController.js')

router.post('/send-otp',SendOTP);


module.exports = router;