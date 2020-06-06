const express = require('express');

const api = express();

api.use(express.urlencoded({extended:true}));
api.use(express.json({ extended: true}));

api.get('/', (req, res) => {
    res.json({ message: 'Hello m8'})
});

module.exports = api;