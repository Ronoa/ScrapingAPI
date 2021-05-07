import User from '../datalayer/models/mongo/user'

export const userById = async ({userId}) =>{
    try {
        const user = await User
        .findById(userId)
        .select({ 
            email:1
        }).lean()

        if(!user) throw new Error(`User not found ${userId}`)

        // hacer login con Bumeran

        return user
    } catch (error) {
        throw error;
    }
}

export const register = async ({email, password}) =>{
    try {
        const userExist = await User.findOne({email}).lean()

        if(userExist) throw new Error(`User ${userId} already exists`)

        // hacer login con Bumeran

        const user = new User({email, password})

        return user.save()
 
    } catch (error) {
        throw error;
    }
}

export const userList = async () =>{
    try {
        return await User.find()
        .select({ 
            email:1
        })
        .lean()
    } catch (error) {
        throw error;
    }
}
