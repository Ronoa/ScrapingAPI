import express from 'express';
import { userList } from '../../controllers/user';

const router = express.Router()

router.get('/list', async (req, res)=>{
   try {
        
    const users = await userList()

    res.json({data: users, success: true})

   } catch (error) {
       const { message, response:{statusText} } = error
       res.status(500).json({message:message || statusText, success:false })
   }
})

router.get('/:id', (req, res)=>{
    res.send('Get App puppeteer')
})

router.post('/register', (req, res)=>{
    res.send('Get App puppeteer')
})

export default router