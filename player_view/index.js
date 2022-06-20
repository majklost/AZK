"use strict";
import Phaser from "phaser";

//Neměnit rozměry textur! potřeba uupravit i v board template

import { GameScene } from "./js/gameScene.js";

//Determine resolution of window
const WIDTH = 1920;
const HEIGHT = 1080;
//Settings of Phaser

const config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,

  physics: {
    default: "arcade",
    arcade: {},
  },
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  resolution: window.devicePixelRatio,
  backgroundColor: "#23a4c4",
  scene: [GameScene],
};

//init of Phaser
const game = new Phaser.Game(config);

// game.scale.scaleMode = Phaser.Scale.FIT;
//init of my properties
