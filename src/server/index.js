const { emit } = require('process');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 6600;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const getVisitors = () => {
  let client = io.sockets.clients().connected;
  let sockets = Object.values(client);
  let users = sockets.map(s => s.user);
  return users;
};

const emitVisitors = () => {
    io.emit("visitors", getVisitors());
}

io.on('connection', (socket) => {
    console.log('a user connected');
    
    
    
    socket.on('chat message', (msg) => {
        // emits to the client
        io.emit('chat message', msg);
    });
    
    socket.on('new_visitor', user => {
        console.log('new_visitor', user);
        socket.user = user;
        emitVisitors();
    });

    socket.on('disconnect', () => {
        emitVisitors();
        console.log('user disconnected');
    });
    
});

http.listen(port, () => {
  console.log(`Listinning port: ${port}`);
});