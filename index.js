const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;
const {getTimeStamp} = require('./utils');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/:date', (req, res) => {
    res.send(getTimeStamp(req.params.date));
})

app.listen(PORT, () => `Localhost is listening on ${PORT}`)