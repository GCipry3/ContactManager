const postgreSQL = require('pg')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const client = new postgreSQL.Client({
    connectionString: process.env.DATABASE_URL
})

app.use(express.json())

client.connect();

app.get('/', (req, res) => {
    client.query('SELECT * FROM users', (err, dbRes) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database query failed' });
        } else {
            res.json(dbRes.rows);
        }
    });
    console.log('Hello World')
});

app.post('/users', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
        res.status(201).json({ status: 'success', message: 'user created' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'internal server error' });
    }
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})