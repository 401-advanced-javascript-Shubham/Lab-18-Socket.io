'use strict';

const io = require('socket.io') (3000);

const emergency = require('./modules/emergency.js')(io);
const weather = require('./modules/weather.js')(io);

io.on('connecton', (socket) => {

    console.log('Welcome', socket.id);

    socket.on('sunrise', (payload) => {
        io.emit('sunrise', payload);
    });

    socket.on('sunset', (payload) => {
        io.emit('sunset', payload);
    });
});
