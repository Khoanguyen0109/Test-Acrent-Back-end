import { Router } from 'express';
import { wrapAsync } from '../utils/response';
import { getMealHistory } from './controller';

const router = Router();

router.get('/meals', wrapAsync(getMealHistory));

export default router;
