const password = process.env.PASSWORD;
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenio a ByteWord estimado Cliente.');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({
            message: 'Login successful',
            username,
            password
        });
        return;
    }
    res.status(401).json({
        message: 'Login failed'
    });
    return;
});