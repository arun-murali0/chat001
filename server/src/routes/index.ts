import { Router } from 'express';
import { createNewUser, userLogin } from '../controllers';

const router = Router();

// auth route

router.post('/auth/create', createNewUser);
router.post('/auth/login', userLogin);

// app route

export default router;
