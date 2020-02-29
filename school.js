'use strict';

const io = require('socket.io-client');

module.exports = io => {
    const school = io.of('/teacher');
    school.on('connection', (socket) => {
      console.log('school', socket.id);

      socket.on('join', room => {
        console.log('joined', room);
        socket.join(room);
      });

      socket.on('teachergrade', payload => {
        socket.broadcast.emit('progress', payload);
      });
    
      socket.on('studentassignment', payload => {
        socket.broadcast.emit('graded', payload);
      });
    
    });

}