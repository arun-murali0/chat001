import { Router } from 'express';
import { createNewUser, userLogin } from '../controllers';
import passport from '../middleware/localPassword';

const router = Router();

// auth route
router.post('/auth/create', createNewUser);
router.post('/auth/login', passport.authenticate('local',{
  failureRedirect:"/auth/login"
}), userLogin);

// app route

export default router;
