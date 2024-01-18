const jwt = require('jsonwebtoken')



class tokenService {


    async GenerateToken(payload){
 
        // here payload is user information like _id... and is valid for 1hour
        const accessToken = await jwt.sign(payload,'RandomStringKey',{
            expiresIn:'1h'
        })

        return accessToken;

    }
}

module.exports = new tokenService();