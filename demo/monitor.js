'use strict';

const io = require('socket.io-client');

const api =  io.connect('http://localhost:3000/api');

api.on('create', payload => {
    console.log(payload);
    
});

api.on('get', payload => {
    console.log(payload);
    
});

api.on('delete', payload => {
    console.log(payload);
    
});

api.on('update', payload => {
    console.log(payload);
    
});