'use strict';
//Namespace called emergency
//Police and Fire
// Room

let io;

module.exports = (io) => {

    const emergency = io.of('/emergency');
    
    emergency.on('connection', socket => {
    
        console.log('EMERGENCY CHANNEL', socket.id);
    
        socket.on('join', room => {
            socket.join(room);
        })
    
        socket.on('help', payload => {
            emergency.to('police').emit('crime', payload);
        });
    
        socket.on('fire', payload => {
            emergency.to('firedepartment').emit('fire', payload);
        });
    
    
    });
}

