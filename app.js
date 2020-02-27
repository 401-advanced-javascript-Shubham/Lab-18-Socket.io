'use strict';

const io = require('socket.io-client');
const socket = io.connect('http:localhost:3000');

const emergency = io.connect('http:localhost:3000/emergency');
const weather = io.connect('http:localhost:3000/weather');

setInterval( () => {
    socket.emit('sunrise', Math.ceil(Math.random() * 12));
},5000)

setInterval( () => {
    emergency.emit('911', 'Help');
},1000)

setInterval( () => {

    let num = Math.floor(Math.random()* 2);
    let event = num === 1 ? 'rain' : 'snow';
    weather.emit(event);
},1000)