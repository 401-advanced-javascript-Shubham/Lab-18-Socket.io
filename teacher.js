'use strict';

const io = require('socket.io-client');
const schoolChannel = io.connect('http://localhost:3000/school');

schoolChannel.emit('join','teacher');
schoolChannel.on('grading', payload => {
    console.log(`Received an assignment to grade: ${payload}`);
    const gradeMap = { 1: 'Pass', 2: 'Fail'};
    const index = Math.ceil(Math.random() * 2);
    const grade = {
        assignment: payload,
        grade: gradeMap[index],
    };
    schoolChannel.emit('graded', grade);
  });