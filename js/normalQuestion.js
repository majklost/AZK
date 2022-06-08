import Phaser from "phaser";
import eventCenter from "./eventCenter";
import { xRes, yRes } from "../myconfig";
//Scene with question and controls for TV moderator
export class NormalQuestion extends Phaser.Scene {
  constructor() {
    //Sets the name of Scene
    super("NormalQuestion");
    eventCenter.on("newQuestion", this.loadDataFromBoard.bind(this));
    this.elapsedTime = 1;
  }

  create() {
    this.renderQuestionAndAnswer();
    this.timerRender();
    this.createArc();
    this.renderRightFalseButtons();
  }
  update() {
    this.updateArc();
  }

  loadDataFromBoard(number, question) {
    this.scene.restart();
    console.log(number, question);
    this.data.set("BoardData", { number: number, question: question });
  }
  renderQuestionAndAnswer() {
    const style = {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#000000",
      align: "center",
    };
    const questionString = this.data.get("BoardData").question.question;
    this.questionText = this.add.text(400, 300, questionString, {
      ...style,
      wordWrap: {
        width: 400,
      },
    });

    this.questionText.setDepth(2);
    this.questionText.setOrigin(0.5);
    this.questionLabel = this.add.rexRoundRectangle(
      xRes / 2,
      yRes / 2,
      400,
      200,
      20,
      0x6666ff
    );

    this.questionLabel.setInteractive();
    this.questionLabel.on("pointerdown", () => {
      this.scene.switch("GameScene");
    });
    const answerString = this.data.get("BoardData").question.answer;
    this.answerText = this.add.text(xRes / 2, yRes / 2 + 160, answerString, {
      ...style,
      wordWrap: {
        width: 200,
      },
    });
    this.answerText.setDepth(2);
    this.answerText.setOrigin(0.5);

    this.answerLabel = this.add.rexRoundRectangle(
      xRes / 2,
      yRes / 2 + 160,
      200,
      100,
      20,
      0xb7e317
    );
  }
  timerRender() {
    this.timer = this.add.circle(xRes / 2 - 70, yRes / 4 - 30, 70, 0xff0000);
    this.timerText = this.add
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
      this.clockTimer = this.time.addEvent(timerProperties);
      this.tweens.add({
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
    this.graphics = this.add.graphics();

    this.timerAngle = { max: 360 };
    console.log(this.tweens);
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
  renderRightFalseButtons() {}
}
