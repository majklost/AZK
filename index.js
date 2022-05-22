"use strict";
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
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("base_tile", require("./assets/basic_tile.png"));
}

function create() {
  game.scale.scaleMode = Phaser.Scale.FIT;
  // const shape = new Phaser.Geom.POLYGON();
  const tile = this.add.image(xRes / 2, yRes / 2, "base_tile");
  tile.setInteractive();
  tile.on("pointerdown", function (pointer) {
    console.log("shit");
  });
}
