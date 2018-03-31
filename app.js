const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    assert.equal(null, err);
    console.log('Connection successfully');

    const db = client.db('local');

    app.get('/', (req, res) => {
        db.collection('users').find().toArray(function (err, result) {
            assert.equal(null, err);
            res.render('users', {'users': result});
        });
    });
    
    app.use((req, res) => {
        res.sendStatus(404);
    });
    
    const server = app.listen(3000, 'localhost', () => {
        console.log('Listening on port 3000');
    });

    //client.close();
})
