import Phaser from "phaser";
import eventCenter from "./eventCenter";
export class NormalQuestion extends Phaser.Scene {
  constructor() {
    super("NormalQuestion");
    eventCenter.on("newQuestion", this.loadDataFromBoard.bind(this));
  }
  create() {
    this.text = this.add.text(400, 300, "SHIT", {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#000000",
    });
    this.text.setDepth(2);
    this.text.setOrigin(0.5);
    this.circle = this.add.circle(400, 300, 80, 0x6666ff);
    this.circle.setDepth(1);
    this.circle.setInteractive();
    this.circle.on("pointerdown", () => {
      this.scene.switch("GameScene");
    });
    this.text.setText(this.data.get("QuestionNumber"));

    // this.scene.switch("GameScene");
  }
  loadDataFromBoard(data) {
    this.scene.restart();
    this.data.set("QuestionNumber", data);
  }
}
