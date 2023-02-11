import { Router } from 'express';
import { wrapAsync } from '../utils/response';
import { getDiaryHistory } from './controller';

const router = Router();

router.get('/diaries', wrapAsync(getDiaryHistory));

export default router;
