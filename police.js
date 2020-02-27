'use strict';

const io = require('socket.io-client');
const policeChannel = io.connect('http:localhost:3000/emergency');

policeChannel.on('help', payload => {
    console.log('Police Channel');
})