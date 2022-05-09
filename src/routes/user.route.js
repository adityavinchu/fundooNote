import express from 'express';
import * as userController from '../controllers/user.controller';
import { userAuth,ResetAuth } from '../middlewares/auth.middleware';

//import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to validate login
router.post('/login', userController.login);

//route to create a new user
router.post('/registration', userController.newUser);

//route for forget password
router.post('/forgetpassword', userController.forgetPassword);

//reset password
router.post('/reset',ResetAuth, userController.resetPassword);


export default router;
