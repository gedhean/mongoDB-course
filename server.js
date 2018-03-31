const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', {'name': 'jedi'});
});

app.use((req, res) => {
    res.sendStatus(404);
});

const server = app.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});