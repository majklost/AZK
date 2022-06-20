const io = require("socket.io")(3000, {
  cors: { origin: ["http://localhost:1234", "http://localhost:64002"] },
});
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("QuestionPick", (number, coords) => {
    console.log(number, coords);

    socket.broadcast.emit("GiveQuestion", number, coords);
  });
});
