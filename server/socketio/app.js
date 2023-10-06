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
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

server.listen(3001, () => {
  console.log('Socket IO server listening on port 3001');
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function(socket) {

  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', (data) => {
    console.log('\n\n===== Client logged-in =====\n email: ' + data.email, '\n tripId : ', data.tripId, '\n\n');

    // socket에 클라이언트 정보를 저장한다
    socket.email = data.email;
    socket.userid = data.userid;
    socket.tripId = data.tripId;    // socket 블록 내에서만 유효

    socket.join(socket.tripId, console.log(" * ", socket.email, " -> room", socket.tripId, " 입장 \n\n"));

  });

  socket.on('dragAndDrop', (data) => {
    viewOrder(data);
    editPlan(data)
    console.log("\n\n===== 수신 =====", data, '\n\n');
    console.log("\n\nroom", socket.tripId, "에 전송\n\n")
    socket.to(data.tripId).emit('dragAndDrop', data);   // room으로만 데이터 전송
  })

  socket.on('forceDisconnect', function() {
    socket.disconnect();
    socket.leave(socket.tripId);
  })

  socket.on('disconnect', function() {
    console.log('\n\n===== user disconnected =====\n' + socket.email, '\n\n');
    socket.leave(socket.tripId);
  });
});