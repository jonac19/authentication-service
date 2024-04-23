import { compare } from 'bcrypt';
import pool from '../database/pool'

export async function authController(req: any, res: any) {
    try {
        if (!req.body.username) {
            return res.status(400).json({ error: "Username is missing" });
        }

        if (!req.body.password) {
            return res.status(400).json({ error: "Password is missing" });
        }
        
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users WHERE username = $1', [req.body.username]);
        client.release();
        
        if (!result.rows.length) {
            return res.status(400).json({ error: "Username doesn't exist" });
        }

        if (!await compare(req.body.password, result.rows[0].password)) {
            return res.status(400).json({ error: "Password incorrect" });
        }

        res.status(200).json({ success: "Successfully authenticated" });
    } catch (error) {
        console.error(`Error executing query: ${error}`);
        res.status(500).json({ error: "Internal server error" });
    }
}