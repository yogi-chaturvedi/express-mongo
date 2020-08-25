const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://mongo-user:Mongo@123@mongo.ougvv.mongodb.net/test-database?retryWrites=true&w=majority";
const app = express();


MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connection to mongodb successful");

        const db = client.db('test-database');
        const collection = db.collection('quotes')

        app.use(bodyParser.json());

        app.get("/api", (req, res) => {
            res.sendFile(__dirname + "/web/index.html");
        })

        app.post('/api/quotes', (req, res) => {
            const payload = { ...req.body, publishedOn: new Date().toISOString() }
            collection.insertOne(payload)
                .then(result => {
                    res.end();
                });
        })

        app.get("/api/quotes", (req, res) => {
            res.setHeader("Content-type", "application/json");
            collection.find().toArray().then(q => {
                res.end(JSON.stringify(q));
            });
        })

        app.listen(3050, function () {
            console.log('listening on 3050');
        })

    }).catch(err => {
        console.log("Connection to mongodb failed", err);
    });

