'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
    if(err) {
        console.log('Failed connecting mongodb');
    } else {
        console.log('Mongodb database connected');
    }
});
