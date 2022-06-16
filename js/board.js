import { Tile } from "./tile.js";
import eventCenter from "./eventCenter.js";
import { QuestionGenerator } from "./questionGenerator.js";

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
    this.questionGenerator = new QuestionGenerator();
  }
  //initialize each tile (set their sprites), gets questions from API
  init(ctx) {
    //ctx - context of main gamescene
    this.ctx = ctx;
    traverseModelBoard(this.boardModel, (tile) => {
      tile.init(this.ctx, this.boardHandler.bind(this));
    });
    this.questionGenerator.getQuestions();
    this.questionGenerator.getTFQuestions();
  }

  //render whole board, when given where should first tile be positioned
  render(beginX, beginY) {
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

    //Creates event with data to send to QuestionScene
    const actualQuestion = !this.chosenTile.tileState
      ? this.questionGenerator.questions[tile.number - 1]
      : this.questionGenerator.TFQuestions[tile.number - 1];

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
    if (this.player == "B") this.player = "O";
    else if (this.player == "O") this.player = "B";

    eventCenter.emit("playerSwitch", this.player);
  }
  questionAnsweredRight(bool, TF = false) {
    //Answered correctly
    if (bool) this.chosenTile.setState(this.player);
    //Answered incorrectly and it is not True False question
    else if (!TF) this.chosenTile.setState("G");
    //Answered incorrectly and it is True False question
    else {
      this.switchPlayer();
      this.chosenTile.setState(this.player);
    }
    this.checkWin();
    this.switchPlayer();
  }
  checkWin() {
    console.log(this.chosenTile);
    console.log(this.boardModel);
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
      callback(boardModel[rowIndex][i], rowIndex, i);
    }
    numOfColumns += 1;
  }
}
//Helper, render each row of board
function renderRow(beginX, y, rowArray, template, rowIndex) {
  let curX = beginX;
  rowArray.forEach((tile, columnIndex) => {
    tile.render(curX, y, 1);
    tile.pyramidCoords = { x: rowIndex, y: columnIndex };
    curX += template.width / 2;
  });
}
