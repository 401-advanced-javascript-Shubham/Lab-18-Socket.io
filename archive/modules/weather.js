'use strict';

let io;
module.exports = (io) => {
    const weather = io.of('/weather');

weather.on('connection', socket => {
 console.log('WEATHER CHANNEL', socket.id);

 socket.on('snow', payload => {
     socket.broadcast.emit('snow', payload);
 });

 socket.on('rain', payload => {
    socket.broadcast.emit('rain', payload);
});
});
}