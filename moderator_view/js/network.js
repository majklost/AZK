import { API } from "../myconfig";
export class Network {
  //Sets whether you are using own questions or one from API
  constructor(mode = "Trivia") {
    this.api = API;
    this.mode = mode;
    this.questions = [];
    this.TFQuestions = [];
    this.pin;
  }
  async getPin() {
    if (localStorage.getItem("pin")) {
      const temporaryPin = localStorage.getItem("pin");
      if (await this.checkSession(temporaryPin)) {
        this.pin = temporaryPin;
      } else {
        localStorage.removeItem("pin");
        this.getPin();
      }
    } else {
      this.getNewPin();
    }
  }

  async getNewPin() {
    try {
      const response = await fetch("http://localhost:8080/moderator");
      const { pin } = await response.json();
      localStorage.removeItem("pin");
      localStorage.setItem("pin", pin);
      this.pin = pin;
    } catch (err) {
      console.error("Unable to get Pin", err);
    }
  }
  async checkSession(pin) {
    try {
      const response = await fetch(
        `http://localhost:8080/session-check/?pin=${pin}`
      );
      const { bool } = await response.json();

      return bool;
    } catch (error) {
      return false;
    }
  }

  async getQuestions() {
    try {
      const response = await fetch(API);
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
