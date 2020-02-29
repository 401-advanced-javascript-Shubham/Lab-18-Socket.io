'use strict';

const io = require('socket.io-client');
const fireChannel = io.connect('http:localhost:3000/emergency');

fireChannel.emit('join','firedepartment');

fireChannel.on('fire', payload => {
    console.log('Here come the fireman', payload);
})