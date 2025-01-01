import { Router, Request, Response } from 'express';
import db from '../services/data_base';

const router = Router();


router.get('/users', async (req: Request, res: Response) => {
    try {
        const response = await db.getAllItems('users');
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});


export default router