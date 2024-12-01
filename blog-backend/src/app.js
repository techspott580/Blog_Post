const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');

const app = express();


const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
}));
app.use(bodyParser.json());


app.use('/api/posts', postsRoutes);

module.exports = app;

