"use strict";
// import { io } from "socket.io-client";
//Neměnit rozměry textur! potřeba uupravit i v board template
import RoundRectanglePlugin from "phaser3-rex-plugins/plugins/roundrectangle-plugin.js";
import { xRes, yRes } from "./myconfig.js";
import { NormalQuestion } from "./js/normalQuestion.js";
import { GameScene } from "./js/gameScene.js";

//Determine resolution of window

//Settings of Phaser

const config = {
  type: Phaser.AUTO,
  width: xRes,
  height: yRes,

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
  scene: [GameScene, NormalQuestion],
};

//init of Phaser
const game = new Phaser.Game(config);

// game.scale.scaleMode = Phaser.Scale.FIT;
//init of my properties
