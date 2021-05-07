import { Schema } from 'mongoose'

import { dbTest } from '../../connections/mongo'

const UserSchema = new Schema({
    email: { 
        type: String,
        required: true,
        min:6,
    },
    password: { 
        type: String,
        required: true,
        min:6
    }
},{ timestamp: true })


export default dbTest.model('Users', UserSchema)
