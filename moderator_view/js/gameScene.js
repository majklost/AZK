import { Board } from "./board.js";
import { socket } from "./socket.js";
import { xRes, yRes } from "../myconfig.js";
import { socket } from "./socket.js";
export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.board = new Board();
  }
  preload() {
    this.load.image("right_button", require("../assets/right_button.png"));
    this.load.image("false_button", require("../assets/false_button.png"));
    this.load.image("base_tile", require("../assets/basic_tile.png"));
    this.load.image("red_tile", require("../assets/red_tile.png"));
    this.load.image("blue_tile", require("../assets/blue_tile.png"));
    this.load.image("grey_tile", require("../assets/grey_tile.png"));
    this.load.image("switchToBlue", require("../assets/switchToBlue.png"));
    this.load.image("switchToOrange", require("../assets/switchToOrange.png"));
    this.load.image("button", require("../assets/Replay_button.png"));
    this.board.init(this);
  }
  create() {
    this.board.render(xRes / 2, 100);
  }
  renderWinner(winner) {
    socket.emit("win", winner);
    const rec = this.add.rectangle(0, 0, xRes * 2, yRes * 2, 0x00ff00, 0.1);
    rec.setInteractive();
    const text = this.add.text(
      xRes / 2,
      yRes / 2,
      `${winner == "O" ? "Orange" : "Blue"} player wins`,
      {
        color: 0xffffff,
        fontFamily: "Arial",
        fontSize: "40px",
        fontStyle: "bold",
      }
    );
    text.setOrigin(0.5);
    const img = this.add.image(xRes / 2, yRes / 2 + 70, "button");
    img.setScale(0.4);
    img.setInteractive();
    img.on("pointerdown", () => {
      location.reload();
    });
  }
}
