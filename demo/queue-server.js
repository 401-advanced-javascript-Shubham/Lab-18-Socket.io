'use strict';

const uuid =  require('uuid').v4;
const io =  require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Welcome', socket.id);
});

io.of('/api', (socket) => {
    socket.on('create', (message) => handleEvent('create', message))
    socket.on('update', (message) => handleEvent('update', message))
    socket.on('delete', (message) => handleEvent('delete', message))
    socket.on('get', (message) => handleEvent('get', message))


function handleEvent(event,payload) {
    let messageId = uuid();
    let message = { id: messageId, payload: payload};
    socket.broadcast.emit(event, message);
}
});
