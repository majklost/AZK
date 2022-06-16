export class Tile {
  constructor(number) {
    this.ctx;
    this.x;
    this.y;
    this.spriteTile;
    this.number = number;
    this.pyramidCoords = { x: undefined, y: undefined };
    this.numberHolder;
    this.tileState = undefined;
    this.border = undefined;
  }
  //gives context of scene to Tile
  init(ctx, boardHandler) {
    this.ctx = ctx;
    this.boardHandler = boardHandler;
  }
  //render Tile on exact position
  render(x, y, number) {
    this.x = x;
    this.y = y;
    this.spriteTile = this.ctx.add.sprite(x, y, "base_tile");
    const tw = this.spriteTile.width;
    const th = this.spriteTile.height;

    this.spriteTile.setInteractive(
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
    this.spriteTile.on("pointerdown", () => {
      this.clickHandler();
    });
    this.spriteTile.setScale(0.5);
    this._renderNumber();
  }
  _renderNumber() {
    this.numberHolder = this.ctx.add
      .text(this.x, this.y, `${this.number}`, {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
      })
      .setOrigin(0.5);
  }
  clickHandler() {
    this.boardHandler(this);
  }
  setColor() {
    if (this.tileState == "B") {
      this.numberHolder.destroy();
      this.spriteTile.setTexture("blue_tile");
    } else if (this.tileState == "O") {
      this.numberHolder.destroy();
      this.spriteTile.setTexture("red_tile");
    } else if (this.tileState == "G") this.spriteTile.setTexture("grey_tile");
  }
  setState(state) {
    this.tileState = state;

    if (this.tileState == "B" || this.tileState == "O")
      this.spriteTile.removeListener("pointerdown");

    this.setColor();
  }
  setBorder(borderType) {
    this.border = borderType;
  }
}
