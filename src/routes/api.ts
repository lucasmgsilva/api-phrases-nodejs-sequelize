import { Router } from 'express';
import * as ApiController from '../controllers/api';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/frases', ApiController.store);

export default router;