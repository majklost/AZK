import { io } from "socket.io-client";
export const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log(`You connected with id ${socket.id}`);
});
socket.on("GiveQuestion", (number, coords) => {
  console.log(number);
  console.log(coords);
});
