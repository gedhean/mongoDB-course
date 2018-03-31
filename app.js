const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    assert.equal(null, err);
    console.log('Connection successfully');

    const db = client.db('local');

    db.collection('users').find().toArray(function (err, result) {
        assert.equal(null, err);
        console.log('Results founded:');
        result.forEach(element => {
            console.log(element);
        });
    });

    client.close();
})
