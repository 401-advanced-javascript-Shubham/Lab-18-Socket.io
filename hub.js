'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('CORE', socket.id);
  socket.on('grades', (payload) => {
    io.emit('message', payload);
  });
});