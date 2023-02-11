import { Router } from 'express';
import { wrapAsync } from '../utils/response';
import { getExercise } from './controller';

const router = Router();

router.get('/exercises', wrapAsync(getExercise));

export default router;
