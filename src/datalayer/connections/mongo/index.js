import mongoose from 'mongoose';

require('dotenv/config');

const {
  CONNECTION_URI_MONGO_TEST 
} = process.env

const config = {
  keepAlive         : true,
  socketTimeoutMS   : 0,
  useCreateIndex    : true,
  useNewUrlParser   : true,
  useUnifiedTopology: true
}


const successMongo = (dbName) => () => {
  console.log(`[MONGO] Mongo ${dbName} is connect`);
};

const errMongo = (mongoError) => {
  try {
    const date = new Date();
    const formatDate = date.toISOString().slice(0, 19);
    console.log(`[${formatDate}] - ERROR: [${mongoError.message}]`);
    
  } catch (error) {
    console.log('connectionMongo -> error', error);
  }
};

 
export const dbTest = mongoose.createConnection(CONNECTION_URI_MONGO_TEST, config);
dbTest.then(successMongo('bdtest'))