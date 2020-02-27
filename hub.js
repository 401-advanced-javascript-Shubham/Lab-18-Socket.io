'use strict';

const io = require('socket.io') (3000);



io.on('connecton', (socket) => {

    console.log('Welcome', socket.id);

    socket.on('sunrise', (payload) => {
        io.emit('sunrise', payload);
    });

    socket.on('sunset', (payload) => {
        io.emit('sunset', payload);
    });
});

const emergency = io.of('/weather');
weather.on('connection', socket => {
 console.log('WEATHER CHANNEL', socket.id);

 socket.on('help', payload => {
     socket.broadcast.emit('help', payload);
 })
});

const emergency = io.of('/emergency');
emergency.on('connection', socket => {
 console.log('EMERGENCY CHANNEL', socket.id);

 socket.on('help', payload => {
     socket.broadcast.emit('help', payload);
 })
});