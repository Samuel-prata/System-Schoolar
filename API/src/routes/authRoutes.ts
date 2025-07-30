import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getMe } from '../controllers/authController';

const router = Router();

router.get('/me', authMiddleware, getMe);

export default router;
