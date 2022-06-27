import { io } from "socket.io-client";
export const socket = io("http://localhost:8080");
socket.on("connect", () => {
  console.log(`player connected with id ${socket.id}`);
});
