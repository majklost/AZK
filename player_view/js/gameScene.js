import { socket } from "./socket.js";
import { Tile } from "./tile.js";
export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.chosenTile;
    this.boardModel = prepareModelBoard(7);
    this.player = "B";
    this.questionGenerator;
    socket.on("GiveQuestion", (number, coords) => {
      this.chosenTile = this.boardModel[coords.y][coords.x];
      this.chosenTile.pickTile("PTRG");
    });
    socket.on("playerSwitch", (player) => {
      this.player = player;
      console.log("Current player is: ", player);
    });
    socket.on("timerStart", () => {
      this.chosenTile.runTimer();
    });
    socket.on("tileResolved", (state) => {
      this.chosenTile.resolveTile();
      this.chosenTile.setState(state);
    });
    socket.on("win", (winner) => {
      this.renderWinner(winner);
    });
  }
  renderWinner(winner) {
    const rec = this.add.rectangle(0, 0, 1920 * 2, 1080 * 2, 0x00ff00, 0.1);
    rec.setInteractive();
    const text = this.add.text(
      1920 / 2,
      1080 / 2,
      `${winner == "O" ? "Orange" : "Blue"} player wins`,
      {
        color: 0xffffff,
        fontFamily: "Arial",
        fontSize: "80px",
        fontStyle: "bold",
      }
    );
    text.setOrigin(0.5);
    const img = this.add.image(1920 / 2, 1080 / 2 + 70, "button");
    img.setScale(0.9);
    img.setInteractive();
    img.on("pointerdown", () => {
      location.reload();
    });
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
  }
  create() {
    this.render(1920 / 2, 200);
  }
  update() {
    if (this.chosenTile && this.chosenTile.graphics) {
      this.chosenTile.updateArc();
    }
  }
  render(beginX, beginY) {
    //Sets space between each hexagon
    const template = {
      width: 140 * 2,
      height: 160 * 2,
    };
    let curX = beginX;
    let curY = beginY;
    //renders typical quiz board
    this.boardModel.forEach((rowArray, rowIndex) => {
      renderRow(curX, curY, rowArray, template, rowIndex);
      curX -= template.width / 4;
      curY += (template.height * 3) / 8;
    });
  }
  init(ctx) {
    //ctx - context of main gamescene
    traverseModelBoard(this.boardModel, (tile) => {
      tile.init(this);
    });
    // this.questionGenerator.getQuestions();
    // this.questionGenerator.getTFQuestions();
  }
}

function prepareModelBoard(numOfRows) {
  let numOfColumns = 1;
  let displayedNumber = 1;
  const boardModel = [];
  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    const row = [];
    for (let i = 0; i < numOfColumns; i++) {
      row.push(new Tile(displayedNumber));
      displayedNumber++;
    }
    numOfColumns += 1;
    boardModel.push(row);
  }
  return boardModel;
}
function traverseModelBoard(boardModel, callback, numOfRows = 7) {
  let numOfColumns = 1;
  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    for (let i = 0; i < numOfColumns; i++) {
      callback(boardModel[rowIndex][i], rowIndex, i, numOfRows);
    }
    numOfColumns += 1;
  }
}
function renderRow(beginX, y, rowArray, template, rowIndex) {
  let curX = beginX;
  rowArray.forEach((tile, columnIndex) => {
    tile.render(curX, y, 1);
    tile.pyramidCoords = { x: columnIndex, y: rowIndex };
    curX += template.width / 2;
  });
}
