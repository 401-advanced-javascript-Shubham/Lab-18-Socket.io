'use strict';

const io = require('socket.io-client');
const schoolChannel = io.connect('http://localhost:3000/school');

school.emit('join', 'student');

setInterval(() => {
  const assignment = Math.ceil(Math.random() * 12);
  schoolChannel.emit('teachergrade', `${assignment}`);
}, 1000);

schoolChannel.on('graded', payload => {
  console.log(payload);
});