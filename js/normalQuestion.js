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
    eventCenter.on("playerSwitch", this.switchPlayerAndRerender.bind(this));
    this.timer = new Timer(this, xRes / 2, yRes / 4 - 30, 7000);
    //Is provided by eventEmitter
    this.switchHandler;
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

  loadDataFromBoard(
    number,
    question,
    player,
    switchHandler,
    answerHandler,
    isTF // defines if the question will be true/false or with answer
  ) {
    this.scene.restart();
    //method from board, switch the actual player who plays
    this.switchHandler = switchHandler;
    this.data.set("BoardData", {
      number: number,
      question: question,
      actualPlayer: player,
      isTF: isTF,
    });
    this.answerHandler = answerHandler;
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
    const actualPlayer = this.data.get("BoardData").actualPlayer;
    this.questionText.setDepth(2);
    this.questionText.setOrigin(0.5);
    this.questionLabel = this.add.rexRoundRectangle(
      xRes / 2,
      yRes / 2,
      400,
      200,
      20,
      actualPlayer == "B" ? 0x19b5fe : 0xffa500
    );
    this.questionLabel.setStrokeStyle(10, 0xffffff, 1);
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
    const isTF = this.data.get("BoardData").isTF;
    this.right.scale = this.false.scale = 2 / 3;
    this.right.setInteractive();
    this.false.setInteractive();
    this.right.on("pointerdown", () => {
      this.answerHandler(true, isTF);
      this.scene.switch("GameScene");
    });
    this.false.on("pointerdown", () => {
      this.answerHandler(false, isTF);
      this.scene.switch("GameScene");
    });
  }
  renderSwitchButton() {
    //Helper function, used in if statements below
    function renderSwitch(texture) {
      const sprite = this.add.sprite(xRes / 2, yRes / 4 - 30, texture);
      sprite.scale = 2 / 3;
      sprite.setDepth(-1);
      return sprite;
    }
    const actualPlayer = this.data.get("BoardData").actualPlayer;
    if (actualPlayer == "B")
      this.switch = renderSwitch.call(this, "switchToOrange");
    if (actualPlayer == "O")
      this.switch = renderSwitch.call(this, "switchToBlue");
    this.switch.setInteractive();
    this.switch.on("pointerdown", this.switchHandler);
  }
  //this function rerender button when player switched
  switchPlayerAndRerender(newPlayer) {
    this.data.get("BoardData").actualPlayer = newPlayer;

    this.questionLabel.fillColor = newPlayer == "B" ? 0x19b5fe : 0xffa500;
    // this.switch.setTexture(
    //   newPlayer == "B" ? "switchToOrange" : "switchToBlue"
    // );
    this.switch.visible = false;
    this.timer.hide();
  }
}
