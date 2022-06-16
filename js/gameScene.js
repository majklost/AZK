import { Board } from "./board.js";
import { xRes, yRes } from "../myconfig.js";
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
    this.board.init(this);
  }
  create() {
    this.board.render(xRes / 2, 100);
    console.log(this.game.scale);
  }
}
