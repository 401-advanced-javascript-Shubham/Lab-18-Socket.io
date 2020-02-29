'use strict';

const io = require('socket.io')(3000);
require('./school.js') (io);

io.on('connection', (socket) => {
  console.log('CORE', socket.id);
});