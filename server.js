//express
import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import api from './routes/api';
import cors from 'cors';
//Drive of MongoDB
import mongoose from 'mongoose';
import config from './dbConnection';


mongoose.connect(config.database,{useMongoClient: true, autoReconnect: true, poolSize: 10});

mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection Open ');  
});

mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');
}); 
//Model
import Product from './models/product';
import Tag from './models/tag';

//React middle
import swig from 'swig';
import React from 'react';
import Router from 'react-router';
import routes from './app/routes';

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/api',api);

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});


//Create server application and bind linsterner of iosocket
import http from 'http';
import socketIo from 'socket.io';
var server = http.createServer(app);
var io = socketIo(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;
  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
