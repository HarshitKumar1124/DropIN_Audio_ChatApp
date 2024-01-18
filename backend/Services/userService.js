const userSchema = require('../Schemas/userSchema')


class userService {

    async findUser(DataQuery){

        const user = await userSchema.find(DataQuery)
        
        if(user)
        return user;

        return undefined

    }

    async createUser(data){

        const user = await userSchema.create(data)

    
        return user;

    }
}

module.exports = new userService();