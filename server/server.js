"use strict";
const port = 8080;
const express = require("express");
const app = require("express")();
const server = app.listen(port);
const cors = require("cors");

const path = require("path");
const SessionFunctions = require("./sessionFunctions");
const bodyParser = require("body-parser");

const sessions = {};
const nowConnected = [];
app.use(cors());

app.use("/", express.static(path.join(__dirname, "src")));

app.use("/", express.static(path.join(__dirname, "src", "moderator")));
app.use("/", express.static(path.join(__dirname, "src", "player")));
app.use(bodyParser.json());
//generates 6-digit number which is not in sessions
function generatePin() {
  const pin = Math.floor(100000 + Math.random() * 900000);
  if (sessions[pin]) return generatePin();
  else return pin;
}
app.post("/post/questions", (req, res) => {
  const data = req.body;
  console.log(data);
  const pin = generatePin();
  sessions[pin] = {
    created: new Date(),
    boardModel: SessionFunctions.generateBoardModel(7),
    moderatorID: undefined,
    playerID: undefined,
    nextPlayer: undefined,
    numOfSaves: 0,
    ended: false,
    questions: data,
  };
  res.redirect(`/play?pin=${pin}`);
});

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "src", "generator", "createQuestions.html")
  );
});
app.get("/play", (req, res) => {
  console.log(req.query.pin);

  res.sendFile(path.join(__dirname, "src", "moderator", "moderator.html"));
});

app.get("/watch", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "player", "player.html"));
});

app.get("/moderator-check-active", (req, res) => {
  let pin = req.query.pin;
  if (sessions[pin]) {
    res.json({ session: true });
  } else res.json({ session: false });
});

app.get("/get-questions", (req, res) => {
  let pin = req.query.pin;
  console.log(pin);

  if (sessions[pin]) {
    res.json({ questions: sessions[pin].questions });
  } else res.status(404);
});

app.get("/get-session", (req, res) => {
  let pin = req.query.pin;
  if (sessions[pin] && !sessions[pin].ended) res.json({ pin: sessions[pin] });
  else res.json({ pin: false });
});

const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log(socket.id);
  nowConnected.push(socket.id);

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
    nowConnected.forEach((el, i) => {
      if (el == socket.id) nowConnected.splice(i);
    });

    // const session = Object.keys(sessions).find((key) => {
    //   sessions[key].moderatorID == socket.id ||
    //     sessions[key].playerID == socket.id;
    // });
  });
  socket.on("win", (room, winner) => {
    sessions[room].ended = true;
    socket.to(room.toString()).emit("win", winner);
  });
  socket.on("join-room-moderator", (pin) => {
    if (pin) {
      socket.join(pin.toString());
      console.log(pin);
      if (sessions[pin]) sessions[pin].moderatorID = socket.id;
    }
  });
  socket.on("join-room-player", (pin) => {
    if (sessions[pin]) {
      socket.join(pin);

      io.to(pin.toString()).emit("join-room", true, sessions[pin]);
      sessions[pin].playerID = socket.id;
      io.to(pin.toString()).emit("player-joined");
    } else {
      console.log(socket.id), "CANNOT CONNECT";

      io.to(socket.id).emit("join-room", false);
    }
  });
});

function sessionCleaner() {
  let deleted = 0;
  Object.entries(sessions).forEach((sessionArr) => {
    const pin = sessionArr[0];
    if (!nowConnected.includes(sessionArr[1].moderatorID)) {
      delete sessions[pin];
      deleted += 1;
    }
  });
  console.log(`${deleted} sessions have been deleted`);
}
setInterval(sessionCleaner, 1000 * 60 * 5);
