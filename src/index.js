import express from 'express';
import morgan from 'morgan';
import router from './routes';

require('dotenv/config');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'))

app.use('/api/v1/', router)

app.listen(port,() => {
    console.log(`port Listening: http://localhost:${port}`)
})