import { API } from "../myconfig";
export class QuestionGenerator {
  //Sets whether you are using own questions or one from API
  constructor(mode = "Trivia") {
    this.api = API;
    this.mode = mode;
  }
  async getQuestions() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
}
