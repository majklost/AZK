"use strict";
//Neměnit rozměry textur! potřeba uupravit i v board template
import { xRes, yRes } from "./myconfig.js";
import { NormalQuestion } from "./js/normalQuestion.js";
import { GameScene } from "./js/gameScene.js";

//Determine resolution of window

//Settings of Phaser
import Phaser from "phaser";
const config = {
  type: Phaser.AUTO,
  width: xRes,
  height: yRes,
  physics: {
    default: "arcade",
    arcade: {},
  },
  backgroundColor: "#a6b0f5",
  scene: [GameScene, NormalQuestion],
};
//init of Phaser
const game = new Phaser.Game(config);
// game.scale.scaleMode = Phaser.Scale.FIT;
//init of my properties
