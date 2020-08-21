const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://mongo-user:Mongo@123@mongo.ougvv.mongodb.net/test-database?retryWrites=true&w=majority";
const app = express();


MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connection to mongodb successful");

        const db = client.db('test-database');
        const collection = db.collection('test-collection')

        app.use(bodyParser.urlencoded({ extended: true }));

        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/web/index.html");
        })

        app.post('/quotes', (req, res) => {
            collection.insertOne(req.body)
                .then(result => {
                    res.redirect("/");
                });
        })

        app.listen(3000, function () {
            console.log('listening on 3000');
        })

    }).catch(err => {
        console.log("Connection to mongodb failed", err);
    });

