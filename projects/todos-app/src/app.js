'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./api');

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.use('/api', router)

//START SERVER
app.listen(3000, function(){
    console.log('The server is running at http://localhost:3000')
})
