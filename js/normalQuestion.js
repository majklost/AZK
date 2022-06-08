import Phaser from "phaser";
import eventCenter from "./eventCenter";
import { xRes, yRes } from "../myconfig";
import { Timer } from "./timer";
//Scene with question and controls for TV moderator
export class NormalQuestion extends Phaser.Scene {
  constructor() {
    //Sets the name of Scene
    super("NormalQuestion");
    eventCenter.on("newQuestion", this.loadDataFromBoard.bind(this));
    this.timer = new Timer(this, xRes / 2 - 70, yRes / 4 - 30, 7000);
  }

  create() {
    this.renderQuestionAndAnswer();
    this.timer.timerRender();
    this.timer.createArc();
    this.renderRightFalseButtons();
    this.renderSwitchButton();
  }
  update() {
    this.timer.updateArc();
  }

  loadDataFromBoard(number, question, player, switchHandler) {
    this.scene.restart();
    //method from board, switch the actual player who plays
    this.switchHandler = switchHandler;
    console.log(number, question, player);
    this.data.set("BoardData", {
      number: number,
      question: question,
      actualPlayer: player,
    });
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
  renderRightFalseButtons() {
    this.right = this.add.sprite(xRes / 4, yRes / 2 + 200, "right_button");
    this.false = this.add.sprite(
      (xRes * 3) / 4,
      yRes / 2 + 200,
      "false_button"
    );
    this.right.scale = this.false.scale = 2 / 3;
    this.right.setInteractive();
    this.right.on("pointerdown", this.switchHandler);
  }
  renderSwitchButton() {
    console.log(this.data.get("BoardData"));

    // if (this.data.get("BoardData").ac)
  }
}
