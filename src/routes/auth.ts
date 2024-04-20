import { Router } from 'express';
import pool from '../database/pool'

const router = Router();

router.get('/api/auth/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        client.release();
        res.json(result.rows);
    } catch (error) {
        console.error(`Error executing query: ${error}`);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;
