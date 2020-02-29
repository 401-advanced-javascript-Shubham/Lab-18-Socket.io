'use strict';

const io = require('socket.io-client');
const policeChannel = io.connect('http:localhost:3000/emergency');

policeChannel.emit('join', 'police');

policeChannel.on('crime', payload => {
    console.log('Officer Responding', payload);
})