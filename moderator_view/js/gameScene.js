import { Board } from "./board.js";
import { socket } from "./socket.js";
import { xRes, yRes } from "../myconfig.js";
import { socket } from "./socket.js";
import eventCenter from "./eventCenter.js";
export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.board = new Board();
    eventCenter.on("oldSessionFound", () => {
      this.load.on("complete", this.askRestoreSession.bind(this));
    });
    eventCenter.on("gotPin", (pin) => {
      this.hideOverlay();
      this.renderOverlay(`Pin is ${pin} \nPlease connect the player`);
    });
    socket.on("player-joined", () => {
      this.hideOverlay();
    });
    this.elements = [];
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
    socket.emit("win", this.board.network.pin, winner);
    const text = `${winner == "O" ? "Orange" : "Blue"} player wins`;
    this.renderOverlay(text);
    const img = this.add.image(xRes / 2, yRes / 2 + 70, "button");
    img.setScale(0.4);
    img.setDepth(8);
    img.setInteractive();
    img.on("pointerdown", () => {
      location.reload();
    });
  }
  renderOverlay(textString) {
    const container = this.add.container(xRes / 2, yRes / 2);
    const rec = this.add.rectangle(0, 0, xRes * 2, yRes * 2, 0x00ff00, 0.1);
    rec.setInteractive();
    const text = this.add.text(0, 0, textString, {
      color: 0xffffff,

      fontFamily: "Arial",
      fontSize: "40px",
      fontStyle: "bold",
      wordWrap: { width: 700 },
      align: "center",
    });
    const background = this.add.rectangle(
      text.x,
      text.y,
      text.width,
      text.height,
      0x46676e
    );
    container.add(rec);
    container.add(background);
    container.add(text);
    text.setOrigin(0.5);
    background.setDepth(3);
    container.setDepth(4);
    this.elements.push(container);
  }
  askRestoreSession() {
    this.renderOverlay(
      "There was found unfinished game, would you like to restore it?"
    );
    const yes = this.add.sprite(xRes / 2 - 100, yRes / 2 + 100, "right_button");
    const no = this.add.sprite(xRes / 2 + 100, yRes / 2 + 100, "false_button");
    yes.setScale(0.5);
    yes.setDepth(8);
    no.setDepth(8);
    yes.setInteractive();
    no.setInteractive();
    no.setScale(0.5);
    this.elements.push(yes, no);
    yes.on("pointerdown", () => {
      eventCenter.emit("restoreSession", this.hideOverlay.bind(this));
    });
    no.on("pointerdown", () => {
      eventCenter.emit("killSession");
    });
  }

  hideOverlay() {
    this.elements.forEach((element) => {
      element.destroy();
    });
  }
}
