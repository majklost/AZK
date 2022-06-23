"use strict";
const app = require("express")();
const cors = require("cors");
const port = 8080;
const path = require("path");
const SessionFunctions = require("./sessionFunctions");

const sessions = {};

app.use(cors());
//generates 6-digit number which is not in sessions
function generatePin() {
  const pin = Math.floor(100000 + Math.random() * 900000);
  if (sessions[pin]) return generatePin();
  else return pin;
}

app.get("/moderator", (req, res) => {
  const pin = generatePin();
  sessions[pin] = {
    created: new Date(),
    boardModel: SessionFunctions.generateBoardModel(7),
    moderatorID: undefined,
    playerID: undefined,
    nextPlayer: undefined,
    numOfSaves: 0,
    ended: false,
  };
  res.json({ pin: pin });
  console.log(sessions);
});

app.get("/get-session", (req, res) => {
  let pin = req.query.pin;
  if (sessions[pin] && !sessions[pin].ended) res.json({ pin: sessions[pin] });
  else res.json({ pin: false });
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
  socket.on("QuestionPick", (room, number, coords, hints) => {
    console.log(room, number, coords, hints);
    if (room)
      socket.to(room.toString()).emit("GiveQuestion", number, coords, hints);
  });
  socket.on("playerSwitch", (room, player) => {
    console.log("Player switched to:", player);

    if (room) socket.to(room.toString()).emit("playerSwitch", player);
  });
  socket.on("timerStart", (room) => {
    if (room) socket.to(room.toString()).emit("timerStart");
  });
  socket.on("tileResolved", (room, state, coords, nextPlayer, pin) => {
    const session = sessions[`${pin}`];
    session.boardModel[coords.y][coords.x].status = state;
    session.nextPlayer = `${nextPlayer == "O" ? "B" : "O"}`;
    session.numOfSaves += 1;

    if (room) socket.to(room.toString()).emit("tileResolved", state);
  });
  socket.on("disconnect", () => {
    console.log(socket.id, "Disconnected");
  });
  socket.on("win", (room, winner) => {
    sessions[room].ended = true;
    socket.to(room.toString()).emit("win", winner);
  });
  socket.on("join-room-moderator", (pin) => {
    console.log(socket.id, " wants to join room ", pin);
    socket.join(pin);
    if (sessions[pin]) sessions[pin].moderatorID = socket.id;
  });
  socket.on("join-room-player", (pin) => {
    console.log("ID:", socket.id, " wants to join room with pin ", pin);
    if (sessions[pin]) {
      socket.join(pin);
      console.log("JOINED ", pin);

      io.to(pin.toString()).emit("join-room", true);
    } else {
      console.log(socket.id);

      io.to(pin.toString()).emit("join-room", false);
    }
  });
});
