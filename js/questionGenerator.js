import { API } from "../myconfig";
export class QuestionGenerator {
  //Sets whether you are using own questions or one from API
  constructor(mode = "Trivia") {
    this.api = API;
    this.mode = mode;
    this.questions = [];
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
    }
  }
}
