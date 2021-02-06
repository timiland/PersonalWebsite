const path = require('path');

const cors = require('cors');

const express = require('express');

const app = express();

const buildPath = path.join(__dirname, '..', 'client/dist');

app.use(express.json());

app.use(express.static(buildPath));

app.use(cors());

const routes = require('./routes/api');

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})

app.use('/api', routes);

