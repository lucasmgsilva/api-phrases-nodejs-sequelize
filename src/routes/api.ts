import { Request, Response, Router } from 'express';

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({pong: true});
})

export default router;