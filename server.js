const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

users = require('./routes/api/users');

const app = express();

// Bodyparser middleware
// app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongoDB Connected...'))
    .catch(err => console.log(err));

// Use Route
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));