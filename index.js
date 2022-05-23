"use strict";

import { Tile } from "./js/tile.js";

//Determine resolution of window
const xRes = 800;
const yRes = 600;

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

const game = new Phaser.Game(config);

function preload() {
  // this.load.image("base_tile", require("./assets/basic_tile.png"));
  const tile = new Tile(this);
  tile.init();
}

function create() {
  game.scale.scaleMode = Phaser.Scale.FIT;
  // game.stage.backgroundColor = "#cccccc";
  // const shape = new Phaser.Geom.POLYGON();
  const tile = this.add.sprite(xRes / 2, yRes / 2, "base_tile");
  const tw = tile.width;
  const th = tile.height;
  console.log(tile);

  tile.setInteractive(
    new Phaser.Geom.Polygon([
      [tw / 2, 0],
      [tw, th / 4],
      [tw, (3 * th) / 4],
      [tw / 2, th],
      [0, (3 * th) / 4],
      [0, th / 4],
    ]),
    Phaser.Geom.Polygon.Contains
  );
  tile.on("pointerdown", function (pointer) {
    console.log("shit");
  });
}
