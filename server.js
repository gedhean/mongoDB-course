const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});