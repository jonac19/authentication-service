import { Router, Request, Response } from 'express';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/api/auth', authController);

router.get('/api/test', (req, res) => {
    res.send({ 
        token: "token123" }
    );
})

export default router;
