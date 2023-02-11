import { Router } from 'express';
import { wrapAsync } from '../utils/response';
import { getRecommends } from './controller';

const router = Router();

router.get('/recommends', wrapAsync(getRecommends));

export default router;
