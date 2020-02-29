'use strict';

const i0 = require('socket.io-client');
const api = io.connect('http://localhost:3000/api');

const express =  require('express');
const app = express();

app.get('/',getHandler);
app.post('/',postHandler);
app.put('/',putHandler);
app.delete('/',deleteHandler);

function getHandler(req,res) => {
    api.emit('get','get happened');
    res.send('get');
}

function postHandler(req,res) => {
     api.emit('create','record added');
    res.send('post');
}

function putHandler(req,res) => {
     api.emit('update','record updated');
    res.send('update');
}

function deleteHandler(req,res) => {
     api.emit('delete','record deleted');
    res.send('delete');
}

//app.listen('3001');