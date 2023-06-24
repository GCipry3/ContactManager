const postgreSQL = require('pg')
const express = require('express')
const app = express()
// Set an env var for the PORT, and a default value
const port = process.env.PORT || 3000;

const connection = postgreSQL.Client({
    connectionString: process.env.DATABASE_URL
})

app.get('/',(req,res)=>{
    res.send('Hello World! hihihi')
})

app.post('/users', async (req, res) => {
    const { username, password } = req.body;
    try {
        await connection.connect();
        const result = await connection.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
        res.status(201).json({ status: 'success', message: 'user created' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'internal server error' });
    } finally {
        await connection.end();
    }
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})