'use strict';

const io = require('socket.io-client');

module.exports = io => {
  const school =  io.of('/school');
    school.on('connection', (socket) => {
      console.log('school', socket.id);

      socket.on('join', room => {
        console.log('joined', room);
        socket.join(room);
      });

      socket.on('submission', payload => {
        io.of('school').to('teacher').emit('grading',payload);
      });
    
      socket.on('graded', payload => {
        io.of('school').to('students').emit('graded', payload);
      });
    
    });

}