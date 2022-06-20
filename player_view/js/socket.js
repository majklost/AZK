import { io } from "socket.io-client";
export const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log(`player connected with id ${socket.id}`);
});
socket.on("win", (winner) => {
  console.log(winner, "WINS");
});
