'use strict';

const io = require('socket.io-client');
const socket = io.connect('http:localhost:3000');

const emergency = io.connect('http:localhost:3000/emergency');

socket.on('sunrise', payload => {
    console.log(`Wake up its ${payload} am`)
})

emergency.on('help', payload => {
    console.log(payload)
})