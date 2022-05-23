export class Tile {
  constructor(ctx) {
    this.ctx = ctx;
    this.x;
    this.y;
  }
  init() {
    this.ctx.load.image("base_tile", require("../assets/basic_tile.png"));
  }
}
