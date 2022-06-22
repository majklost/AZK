"use strict";
const app = require("express")();
const cors = require("cors");
const port = 8080;
const path = require("path");
const sessions = { 111: {} };

app.use(cors());

function generatePin() {
  const pin = Math.floor(100000 + Math.random() * 900000);
  if (sessions[pin]) return generatePin();
  else return pin;
}

app.get("/moderator", (req, res) => {
  const pin = generatePin();
  sessions[pin] = { created: new Date() };
  res.json({ pin: pin });
  console.log(sessions);
});
app.get("/session-check", (req, res) => {
  let pin = req.query.pin;
  if (sessions[pin]) res.json({ bool: true });
  else res.json({ bool: false });
  console.log(sessions);
});

app.listen(port, () => {
  console.log("listening");
});

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
