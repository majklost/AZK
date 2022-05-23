"use strict";
//Neměnit rozměry textur! potřeba uupravit i v board template
import { Tile } from "./js/tile.js";
import { Board } from "./js/board.js";

//Determine resolution of window
const xRes = 800;
const yRes = 600;
//Settings of Phaser
const Phaser = require("phaser");
const config = {
  type: Phaser.AUTO,
  width: xRes,
  height: yRes,
  physics: {
    default: "arcade",
    arcade: {},
  },
  backgroundColor: "#a6b0f5",
  scene: {
    preload: preload,
    create: create,
  },
};
//init of Phaser
const game = new Phaser.Game(config);
//init of my properties

const board = new Board();

function preload() {
  this.load.image("base_tile", require("./assets/basic_tile.png"));
  board.init(this);
}

function create() {
  game.scale.scaleMode = Phaser.Scale.FIT;
  board.render(xRes / 2, 100);
}
