import { Tile } from "./tile.js";
export class Board {
  constructor(numOfRows = 7) {
    this.boardModel = prepareModelBoard(numOfRows);
    this.ctx;
  }
  init(ctx) {
    this.ctx = ctx;
    traverseModelBoard(this.boardModel, (tile) => {
      tile.init(this.ctx);
    });
  }
  render(beginX, beginY) {
    const template = {
      width: 140,
      height: 160,
    };
    let curX = beginX;
    let curY = beginY;
    this.boardModel.forEach((rowArray, rowIndex) => {
      renderRow(curX, curY, rowArray, template, rowIndex);
      curX -= template.width / 4;
      curY += (template.height * 3) / 8;
    });
  }
}

//creates triangular array filled up with Tile objects
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
      callback(boardModel[rowIndex][i]);
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

// function getNumberFromIndexes(row, column) {
//   let number = 1;
//   let curLimit = 1
//   for(let i = 0; i< row; i++){
//     for(let j = 0; j< curLimit; j++){

//     }
//     curLimit +=1;
//   }
// }
