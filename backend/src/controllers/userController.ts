import { hash } from 'bcrypt';
import pool from '../database/pool';

export async function userController(req: any, res: any) {
    try {
        if (!req.body.username) {
            return res.status(400).json({ error: "Username is missing" });
        }
    
        if (!req.body.password) {
            return res.status(400).json({ error: "Password is missing" });
        }

        const client = await pool.connect();
        let result = await client.query('SELECT * FROM users WHERE username = $1', [req.body.username]);
        
        if (result.rows.length) {
            return res.status(400).json({ error: "Username already exists" });
        }
        
        const hashedPassword = await hash(req.body.password, 10);
        result = await client.query('INSERT INTO users (username, password) VALUES \($1, $2\)', 
                                    [req.body.username, hashedPassword]);
        
        res.status(200).json({ success: "Successfully created account" });
        client.release();
    } catch (error) {
        console.error(`Error executing query: ${error}`);
        res.status(500).json({ error: "Internal server error" });
    }
}