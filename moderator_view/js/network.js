import { API } from "../myconfig";
import eventCenter from "./eventCenter";
import { socket } from "./socket";
export class Network {
  //Sets whether you are using own questions or one from API
  constructor(mode = "Trivia") {
    this.api = API;
    this.mode = mode;
    this.questions = [];
    this.TFQuestions = [];
    this.pin;
    this.backup;
    hookEventListeners();
  }
  async getPin() {
    if (localStorage.getItem("pin")) {
      const temporaryPin = localStorage.getItem("pin");
      if (await this.checkSession(temporaryPin)) {
        this.pin = temporaryPin;
        eventCenter.emit("oldSessionFound");
      } else {
        localStorage.removeItem("pin");
        await this.getNewPin();
      }
    } else {
      await this.getNewPin();
    }
    eventCenter.emit("gotPin", this.pin);
    console.log(this.pin);

    socket.emit("join-room-moderator", this.pin);
    console.log(this.pin);
  }

  async getNewPin() {
    try {
      const response = await fetch("http://localhost:8080/moderator");
      console.log(response);

      const { pin } = await response.json();
      localStorage.removeItem("pin");
      localStorage.setItem("pin", pin);
      this.pin = pin;
    } catch (err) {
      console.error("Unable to get Pin", err);
    }
  }

  async checkSession(MyPin) {
    try {
      const response = await fetch(
        `http://localhost:8080/get-session/?pin=${MyPin}`
      );
      const session = await response.json();

      if (session.pin && session.pin.numOfSaves) {
        this.backup = session.pin;
        return true;
      } else return false;
    } catch (error) {
      return false;
    }
  }

  async getQuestions() {
    try {
      const response = await fetch(API, { mode: "cors" });
      const { results } = await response.json();

      results.forEach((result) => {
        const QASet = {
          question: atob(result.question),
          answer: atob(result.correct_answer),
        };
        this.questions.push(QASet);
      });
      //TODO: solve errors and display them to user
    } catch (err) {
      console.error(err);
      this.getQuestions();
    }
  }
  async getTFQuestions() {
    for (let i = 0; i < 28; i++) {
      const TFQuestion = {
        question: `Je toto vzorová true false otázka s číslem ${i + 1}?`,
        answer: "ANO",
      };
      this.TFQuestions.push(TFQuestion);
    }
  }
}

function hookEventListeners() {
  eventCenter.on("killSession", () => {
    localStorage.removeItem("pin");
    location.reload();
  });
}
