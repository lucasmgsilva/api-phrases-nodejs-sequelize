import { Router } from 'express';
import * as ApiController from '../controllers/api';

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/frases', ApiController.index);
router.post('/frases', ApiController.store);
router.get('/frases/:id', ApiController.show);
router.put('/frases/:id', ApiController.update);
router.delete('/frases/:id', ApiController.destroy);

export default router;