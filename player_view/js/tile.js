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
  }
  //gives context of scene to Tile
  init(ctx) {
    this.ctx = ctx;
  }
  //render Tile on exact position
  render(x, y, number) {
    this.x = x;
    this.y = y;

    this.spriteTile = this.ctx.add.sprite(0, 0, "base_tile");
    this.container = this.ctx.add.container(x, y, [this.spriteTile]);
    // this.spriteTile.setScale(0.5);
    this._renderTileText(this.number);
  }
  _renderTileText(text) {
    this.numberHolder = this.ctx.add
      .text(0, 0, `${text}`, {
        fontFamily: "Arial",
        fontSize: "48px",
        color: "#000000",
      })
      .setOrigin(0.5);

    this.container.add(this.numberHolder);
  }

  _setColor() {
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
    console.log("NEW STATE");

    this._setColor();
  }
  setBorder(borderType) {
    this.border[borderType] = true;
  }
  pickTile(text) {
    const tween1 = this.ctx.tweens.add({
      targets: this.container,
      duration: 500,
      scaleX: 0,
      ease: "linear",
      onComplete: this.renderQuestionTile.bind(this, text),
    });
  }
  renderQuestionTile(text) {
    // const timer = this.ctx.add.circle(0, 0, 70, 0xff0000);
    this.numberHolder.setText(text);
    this.container.setDepth(2);
    console.log(this.spriteTile.width);
    console.log(this.numberHolder.width);

    if (this.spriteTile.width - 45 < this.numberHolder.width) {
      this.numberHolder.setScale(
        (this.spriteTile.width - 45) / this.numberHolder.width
      );
    }

    this.timerTween = this.ctx.tweens.add({
      targets: this.container,
      duration: 1000,
      scaleX: 1.3,
      scaleY: 1.3,
    });
    this.graphics = this.ctx.add.graphics();

    this.timerAngle = { max: 360 };
    this.container.add(this.graphics);
  }
  updateArc() {
    this.graphics.clear();
    this.graphics.lineStyle(9, 0xff00ff);
    this.graphics.beginPath();
    this.graphics.arc(
      0,
      0,
      60,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(this.timerAngle.max),
      false
    );
    this.graphics.strokePath();
  }
  runTimer() {
    this.ctx.tweens.add({
      targets: this.timerAngle,
      duration: 7000,
      max: 0,
    });
  }
  resolveTile() {
    this.container.setDepth(0);
    this.timerTween.remove();
    this.numberHolder.setScale(1);
    this.graphics.destroy();
    this.container.setScale(1);
  }
}
