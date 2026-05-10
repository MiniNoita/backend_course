import express from 'express';
import UserController from '../controllers/usercontroller.js';

const userRouter = express.Router();

userRouter.post('/register', UserController.registerUser);
userRouter.post('/login', UserController.authenticateUser);

export default userRouter;
