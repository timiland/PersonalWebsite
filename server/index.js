const path = require('path');

const cors = require('cors');

const express = require('express');

const app = express();

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.json());

app.use(express.static(buildPath));

app.use(cors());

const routes = require('./routes/api');



app.listen(5000, () => {
    console.log('server start on port 5000');
})

app.use('/api', routes);