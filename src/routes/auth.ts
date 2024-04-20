import { Router } from 'express';

const router = Router();

router.get('/api/auth/', (req, res) => {
    res.send("working");
})

export default router;
