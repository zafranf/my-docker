'use strict';
const express = require('express');
// Constants
const PORT = 2999;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
    res.send('Docker and Nodejs');
});
app.listen(PORT, HOST);
console.log(`Nodejs running on ${PORT}`);