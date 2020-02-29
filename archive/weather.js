'use strict';

const io = require('socket.io-client');
const socket = io.connect('http:localhost:3000/weather');

weatherChannel.on('snow', (payload) => {
    console.log('snow day');
})

weatherChannel.on('rain', (payload) => {
    console.log('Rainy day');
})