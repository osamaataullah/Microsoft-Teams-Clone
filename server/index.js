const express = require('express');
const app = express();
const http = require('http').createServer(app);

//creates a new socket.io instance attached to the http server. 
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;
const path = require('path');
//----------------------------------------------------------------------

let socketList = {};

// specify path for static files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Routing
app.get('/ping', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});

// Code to execute whenever someone connects
io.on('connection', (socket) => {
  console.log(`New User connected: ${socket.id}`);

  // Code to execute whenever someone disconnects
  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('User disconnected!');
  });

  // check for duplicate username and generate error
  socket.on('check-user', ({ roomId, userName }) => {
    let error = false;
    
    io.sockets.in(roomId).clients((err, clients) => {
      clients.forEach((client) => {
        if (socketList[client] == userName) {
          error = true;
        }
      });
      socket.emit('duplicate-user', { error });
    });
  });

  // Joining a room
  socket.on('room-joined', ({ roomId, userName }) => {
    socket.join(roomId);
    socketList[socket.id] = { userName, video: true, audio: true };

    // Set User List
    io.sockets.in(roomId).clients((err, clients) => {
      try {
        const users = [];
        clients.forEach((client) => {
          // Add to user List
          users.push({ userId: client, info: socketList[client] });
        });
        socket.broadcast.to(roomId).emit('user-joined', users);
        
      } catch (e) {
        io.sockets.in(roomId).emit('duplicate-user', { err: true });
      }
    });
  });

  socket.on('call-user', ({ userToCall, from, signal }) => {
    io.to(userToCall).emit('receiving-call', {
      signal,
      from,
      info: socketList[socket.id],
    });
  });

  socket.on('call-accepted', ({ signal, to }) => {
    io.to(to).emit('accept-call', {
      signal,
      answerId: socket.id,
    });
  });

  // sending chat message
  socket.on('message-sent', ({ roomId, msg, sender }) => {
    io.sockets.in(roomId).emit('message-received', { msg, sender });
  });

  // leaving the meeting
  socket.on('leaving-room', ({ roomId, leaver }) => {
    delete socketList[socket.id];
    socket.broadcast
      .to(roomId)
      .emit('user-left', { userId: socket.id, userName: [socket.id] });
    io.sockets.sockets[socket.id].leave(roomId);
  });

  // toggling the audio-video on-off
  socket.on('toggling-camera-audio', ({ roomId, switchTarget }) => {
    if (switchTarget === 'video') {
      socketList[socket.id].video = !socketList[socket.id].video;
    } else {
      socketList[socket.id].audio = !socketList[socket.id].audio;
    }
    socket.broadcast
      .to(roomId)
      .emit('toggled-camera', { userId: socket.id, switchTarget });
  });
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


// make the server listen to the specified port
http.listen(PORT, () => {
  console.log('Connected : 3000');
});


