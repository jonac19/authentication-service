import { Router, Request, Response } from 'express';
import { authController } from '../controllers/authController';

const router = Router();

router.post('/api/auth', authController);

export default router;
