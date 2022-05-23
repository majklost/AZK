export class Tile {
  constructor(number) {
    this.ctx;
    this.x;
    this.y;
    this.spriteTile;
    this.number = number;
    this.pyramidCoords = { x: undefined, y: undefined };
  }
  //gives context of scene to Tile
  init(ctx) {
    this.ctx = ctx;
  }
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
    this.spriteTile.on("pointerdown", () => console.log(this));
    this.spriteTile.setScale(0.5);
    this._renderNumber();
  }
  _renderNumber() {
    this.ctx.add
      .text(this.x, this.y, `${this.number}`, {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
      })
      .setOrigin(0.5);
  }
  giveCoords() {}
}
