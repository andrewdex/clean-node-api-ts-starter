import express from 'express';
import { userRouter } from '../../../../modules/users/infra/http/routes';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Clean REST API 1.0' });
});

router.use('/users', userRouter);

export { router };
