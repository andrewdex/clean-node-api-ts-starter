import express from 'express';

import { createUserController } from '../../../use-cases/create-user/index';
import { getUserController } from '../../../use-cases/get-user';

const userRouter = express.Router();

userRouter.post('/', (req, res) => createUserController.execute(req, res));
userRouter.get('/', (req, res) => getUserController.execute(req, res));

export { userRouter };
