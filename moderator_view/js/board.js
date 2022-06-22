import { socket } from "./socket.js";
import { Tile } from "./tile.js";
import eventCenter from "./eventCenter.js";
import { Network } from "./network.js";

//Main class of game, takes care of loading questions, displaying tiles and checking winner
export class Board {
  constructor(numOfRows = 7) {
    this.chosenTile;
    //Triangle array of arrays - map of whole gameboard
    this.boardModel = prepareModelBoard(numOfRows);
    this.ctx;
    //Current player, who starts
    this.player = "B";
    //Object which gives questions to game
    this.network = new Network();
    eventCenter.on("restoreSession", (hideOverlay) => {
      traverseModelBoard(this.boardModel, (tile, rowIndex, i) => {
        tile.tileState = this.network.backup.boardModel[rowIndex][i];
        tile.setState();
      });
      this.player = this.network.backup.nextPlayer;
      hideOverlay();
    });
  }
  //initialize each tile (set their sprites), gets questions from API
  init(ctx) {
    //ctx - context of main gamescene
    this.ctx = ctx;
    traverseModelBoard(this.boardModel, (tile) => {
      tile.init(this.ctx, this.boardHandler.bind(this));
    });
    this.network.getQuestions();
    this.network.getTFQuestions();
    this.network.getPin();

    traverseModelBoard(this.boardModel, this.setBorder);
  }

  //render whole board, when given where should first tile be positioned
  render(beginX, beginY) {
    console.log(this.network.pin);

    //Sets space between each hexagon
    const template = {
      width: 140,
      height: 160,
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
  //When clicked on Tile, this function is called
  boardHandler(tile) {
    this.chosenTile = tile;
    console.log(this.chosenTile);

    //Creates event with data to send to QuestionScene
    const actualQuestion = !this.chosenTile.tileState
      ? this.network.questions[tile.number - 1]
      : this.network.TFQuestions[tile.number - 1];

    const generateInicials = function (words) {
      let InicialString = "";
      const wordArray = words.split(" ");
      wordArray.forEach((word) => {
        InicialString += word[0];
      });
      return InicialString;
    };

    socket.emit(
      "QuestionPick",
      this.chosenTile.number,
      this.chosenTile.pyramidCoords,
      generateInicials(actualQuestion.answer)
    );

    if (actualQuestion) {
      this.ctx.scene.switch("NormalQuestion");
      eventCenter.emit(
        "newQuestion",
        tile.number,
        actualQuestion,
        this.player,
        this.switchPlayer.bind(this),
        this.questionAnsweredRight.bind(this),
        this.chosenTile.tileState ? true : false
      );
    }
  }
  switchPlayer() {
    console.log("SWITCHED");
    if (this.player == "B") this.player = "O";
    else if (this.player == "O") this.player = "B";

    socket.emit("playerSwitch", this.player);

    eventCenter.emit("playerSwitch", this.player);
  }
  questionAnsweredRight(bool, TF = false) {
    let state;
    //Answered correctly
    if (bool) state = this.player;
    //Answered incorrectly and it is not True False question
    else if (!TF) state = "G";
    //Answered incorrectly and it is True False question
    else {
      this.switchPlayer();
      state = this.player;
    }
    socket.emit(
      "tileResolved",
      state,
      this.chosenTile.pyramidCoords,
      this.player,
      this.network.pin
    );

    this.chosenTile.setState(state);
    this.checkWin();
    this.switchPlayer();
  }
  checkWin() {
    //if all sides true -> winner
    const connectedToSide = {
      right: false,
      left: false,
      bottom: false,
    };
    const connectedNeighbours = [];
    // Hexagon relative indexes of neighbours in array
    const relativeIndexes = [
      [-1, -1],
      [0, -1],
      [-1, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ];
    function checkNeighbours(tile) {
      relativeIndexes.forEach((relXY) => {
        const x = tile.pyramidCoords.x + relXY[0];
        const y = tile.pyramidCoords.y + relXY[1];
        if (!this.boardModel[y] || !this.boardModel[y][x]) return;
        const neighbour = this.boardModel[y][x];
        if (
          neighbour.tileState == this.player &&
          !connectedNeighbours.includes(neighbour)
        ) {
          connectedNeighbours.push(neighbour);
          resolve.call(this);
          checkNeighbours.call(this, neighbour);
        }
      });
    }
    checkNeighbours.call(this, this.chosenTile);
    console.log(connectedNeighbours);
    function resolve() {
      connectedNeighbours.forEach((neighbour) => {
        if (neighbour.border.left) connectedToSide.left = true;
        if (neighbour.border.right) connectedToSide.right = true;
        if (neighbour.border.bottom) connectedToSide.bottom = true;
      });
      if (
        connectedToSide.left &&
        connectedToSide.right &&
        connectedToSide.bottom
      ) {
        console.log(this.player, " WINS!");
        this.ctx.renderWinner(this.player);
      }
    }
  }

  //Sets border attribute for tiles, according to the position (e.g. tiles on the right edge - right = true), necessary for wincheck algorithm
  setBorder(tile, rowIndex, columnIndex, numOfRows) {
    if (columnIndex == 0) tile.setBorder("left");
    if (columnIndex == rowIndex) tile.setBorder("right");
    if (rowIndex == numOfRows - 1) tile.setBorder("bottom");
  }
}

//Helper, creates triangular array filled up with Tile objects
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

//Helper, goes throough created board and calls each tile with specified argumentt
function traverseModelBoard(boardModel, callback, numOfRows = 7) {
  let numOfColumns = 1;
  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    for (let i = 0; i < numOfColumns; i++) {
      callback(boardModel[rowIndex][i], rowIndex, i, numOfRows);
    }
    numOfColumns += 1;
  }
}
//Helper, render each row of board
function renderRow(beginX, y, rowArray, template, rowIndex) {
  let curX = beginX;
  rowArray.forEach((tile, columnIndex) => {
    tile.render(curX, y, 1);
    tile.pyramidCoords = { x: columnIndex, y: rowIndex };
    curX += template.width / 2;
  });
}
