const io = require("socket.io")(3000, {
  cors: { origin: ["http://localhost:1234", "http://localhost:64002"] },
});
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("QuestionPick", (number, coords, hints) => {
    console.log(number, coords, hints);

    socket.broadcast.emit("GiveQuestion", number, coords, hints);
  });
  socket.on("playerSwitch", (player) => {
    console.log("Player switched to:", player);

    socket.broadcast.emit("playerSwitch", player);
  });
  socket.on("timerStart", () => {
    socket.broadcast.emit("timerStart");
  });
  socket.on("tileResolved", (state) => {
    socket.broadcast.emit("tileResolved", state);
  });
  socket.on("disconnect", () => {
    console.log(socket.id, "Disconnected");
  });
  socket.on("win", (winner) => {
    socket.broadcast.emit("win", winner);
  });
});
