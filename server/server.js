const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

// const users = User.findAll();
app.use(
  cors({ origin: true, credentials: true }),
  express.json(),
);

app.listen(port, () => {
  console.log("서버가 정상적으로 실행되었습니다.");
});

require("./model/index")
require("./routes/index.js")(app);
require("./socketio/app");