function generateBoardModel(numOfRows) {
  let numOfColumns = 1;
  let displayedNumber = 1;
  const boardModel = [];
  for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {
    const row = [];
    for (let i = 0; i < numOfColumns; i++) {
      row.push({ status: undefined, displayedNumber });
      displayedNumber++;
    }
    numOfColumns += 1;
    boardModel.push(row);
  }
  return boardModel;
}
function updateBoardModel(boardModel, row, column) {}

module.exports = { generateBoardModel, updateBoardModel };
