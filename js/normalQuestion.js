import Phaser from "phaser";
export class NormalQuestion extends Phaser.Scene {
  constructor(question, answer, player, ctx) {
    super("NormalQuestion");
    this.question = question;
    this.answer = answer;
    this.player = player;
    this.ctx = ctx;
  }
  init() {}
  create() {
    this.text = this.add.text(400, 300, "SHIT", {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#000000",
    });
    this.text.setDepth(2);
    this.text.setOrigin(0.5);
    console.log(this.text);
    this.circle = this.add.circle(400, 300, 80, 0x6666ff);
    this.circle.setDepth(1);
    this.circle.setInteractive();
    this.circle.on("pointerdown", () => {
      this.scene.switch("GameScene");
    });

    // this.scene.switch("GameScene");
  }
}
