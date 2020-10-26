const { emit } = require('process');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 6900;

const website = "Ozzytop Server";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const getOnlineUsers = () => {
    let client = io.sockets.clients().connected;
    let sockets = Object.values(client);
    let users = sockets.map(s => s.user);
    return users.filter(u => u!=undefined);
  };
  

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on("add_user", user => {
        
        const emitOnlineUsers = () => {
            socket.broadcast.emit("visitors", getOnlineUsers());
        };
          
        socket.emit("server_message", {
            name: website,
            message: `Welcome to ${website} chat`
        });
        
        socket.broadcast.emit("server_message"), {
            name: website,
            message: `${user.name} just joined chat`
        }
        socket.user = user;
        
        emitOnlineUsers();
        
    });

    socket.on('disconnect', () => {
        const {user} = socket;
        if(user){
            socket.broadcast.emit("server_message", {
                name: website,
                message: `${user.name} just left chat`
            })            
        }
        
        emitOnlineUsers();
        console.log('user disconnected');
    });
    
});

http.listen(port, () => {
  console.log(`Listinning port: ${port}`);
});