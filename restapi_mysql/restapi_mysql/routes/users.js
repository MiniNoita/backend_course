/* eslint-disable new-cap */
import { Router } from 'express';
const router = Router();

router.get('/', (req, res, next) => {
  res.send('respond from users-route');
});

export default router;
