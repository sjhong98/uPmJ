const {viewOrder, editPlan} = require("../controller/plan.controller")
var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3001, () => {
  console.log('Socket IO server listening on port 3001');
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function(socket) {

  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', function(data) {
    console.log('Client logged-in:\n email:' + data.email);

    // socket에 클라이언트 정보를 저장한다
    socket.email = data.email;
    socket.userid = data.userid;

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    // io.emit('login', data.name );
  });

  socket.on('dragAndDrop', (data) => {
    // console.log("수신", data);
    viewOrder(data);
    editPlan(data)

    // sourceColumnId: 'drop1',
    // sourceIndex: 1,
    // destinationColumnId: 'drop2',
    // destinationIndex: 1,

    // const _data = {
    //   email: data.email,
    //   item: data.item,
    //   sourceColumnId: data.sourceColumnId,
    //   sourceIndex: data.sourceIndex,
    //   destinationColumnId: data.destinationColumnId,
    //   destinationIndex: data.destinationIndex,
    // }
    // console.log("송신");
    io.emit('dragAndDrop', data);
  })

  // // 클라이언트로부터의 메시지가 수신되면
  // socket.on('ctos', function(data) {
  //   console.log('Message from %s: %s', data.email, data.msg);

  //   var msg = {
  //     from: {
  //       email: data.email,
  //     },
  //     msg: data.msg
  //   };

  //   // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
  //   socket.broadcast.emit('stoc', msg);

    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    // io.emit('s2c chat', msg);

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);

  // force client disconnect from server
  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
});

