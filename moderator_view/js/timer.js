import { xRes, yRes } from "../myconfig";
export class Timer {
  constructor(ctx, x, y, duration, releaseButtons) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.duration = duration;
    this.elapsedTime = 1;
    this.releaseButtons = releaseButtons;
  }
  timerRender() {
    this.timer = this.ctx.add.circle(this.x, this.y, 70, 0xff0000);
    this.timerText = this.ctx.add
      .text(this.x, this.y, "Timer", {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#000000",
        align: "center",
      })
      .setOrigin(0.5);
    this.timer.setInteractive();
    const timerProperties = {
      delay: 1000,
      callback: this.updateTimer.bind(this),
      repeat: this.duration / 1000,
    };
    this.timer.once("pointerdown", () => {
      this.releaseButtons();

      this.timerText.setText(7);
      this.elapsedTime = 1;
      this.clockTimer = this.ctx.time.addEvent(timerProperties);
      this.ctx.tweens.add({
        targets: this.timerAngle,
        duration: this.duration,
        max: 0,
      });
      this.ctx.tweens.add({
        targets: [this.timerAngle, this.timerText, this.timer],
        alpha: 0,
        duration: 500,
        delay: this.duration,
      });
    });
  }
  updateTimer() {
    const limit = this.duration / 1000 + 1;
    this.elapsedTime++;
    if (this.elapsedTime < limit) {
      this.timerText.setText(limit - this.elapsedTime);
    } else {
      this.timerText.setText("END");
    }
  }
  createArc() {
    this.graphics = this.ctx.add.graphics();

    this.timerAngle = { max: 360 };
  }
  updateArc() {
    this.graphics.clear();
    this.graphics.lineStyle(15, 0xff00ff);
    this.graphics.beginPath();
    this.graphics.arc(
      this.x,
      this.y,
      50,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(this.timerAngle.max),
      false
    );
    this.graphics.strokePath();
  }
  hide() {
    this.graphics.visible = false;
    this.timerText.visible = false;
    this.timer.visible = false;
  }
}
