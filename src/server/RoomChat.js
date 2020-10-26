const { emit } = require('process');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 6800;

io.on('connection', (socket) => {
    
    
    // this is listenning for an user to join the room
    socket.on("join_room", room => {
        socket.join(room);
    });
    
    socket.on("message", data => {
       // Message, room
       const { room, message } = data;
       socket.to(room).emit("message", {
          message,
          name: "Friend" 
       });
    });
    
    socket.on("typing", ({room}) => {
        socket.to(room).emit("typing", "someone is typing");
    });
    
    socket.on("stopped_typing", (room) => {
        socket.to(room).emit("stopped_typing");
    });

});

http.listen(port, () => {
  console.log(`Listinning port: ${port}`);
});