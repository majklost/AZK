import { Board } from "./board.js";
import { xRes, yRes } from "../myconfig.js";
export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.board = new Board();
  }
  preload() {
    this.load.image("base_tile", require("../assets/basic_tile.png"));
    this.load.image("red_tile", require("../assets/red_tile.png"));
    this.load.image("blue_tile", require("../assets/blue_tile.png"));
    this.load.image("grey_tile", require("../assets/grey_tile.png"));
    this.board.init(this);
  }
  create() {
    this.board.render(xRes / 2, 100);
  }
}
