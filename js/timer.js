import { xRes, yRes } from "../myconfig";
export class Timer {
  constructor(ctx, x, y, delay) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.delay = delay;
    this.elapsedTime = 1;
  }
  timerRender() {
    this.timer = this.ctx.add.circle(
      xRes / 2 - 70,
      yRes / 4 - 30,
      70,
      0xff0000
    );
    this.timerText = this.ctx.add
      .text(xRes / 2 - 70, yRes / 4 - 30, "Timer", {
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
      repeat: 7,
    };
    this.timer.once("pointerdown", () => {
      this.timerText.setText(7);
      this.elapsedTime = 1;
      this.clockTimer = this.ctx.time.addEvent(timerProperties);
      this.ctx.tweens.add({
        targets: this.timerAngle,
        duration: 7000,
        max: 0,
      });
    });
  }
  updateTimer() {
    this.elapsedTime++;
    if (this.elapsedTime < 8) {
      this.timerText.setText(8 - this.elapsedTime);
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
      xRes / 2 - 70,
      yRes / 4 - 30,
      50,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(this.timerAngle.max),
      false
    );
    this.graphics.strokePath();
  }
}
