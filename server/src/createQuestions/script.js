"use strict";
const questionsContainers = document.querySelectorAll(".questions");
console.log(questionsContainers);
renderQuestions();
const textFieldsA = questionsContainers[0].querySelectorAll(".textFieldA");
const textFieldsQ = questionsContainers[0].querySelectorAll(".textFieldQ");
const hints = document.querySelectorAll(".hint");
const shortcut = document.querySelector(".shortcut");

function questionHTML(number) {
  return ` <div data-number="${number}" class="questionContainer">
<div class="wrap">
    <div class="number"><p>${number}</p></div>
    <div class="question"  data-TF="false">
        <label class="textLabel" for="textField">Otázka</label>
        <textarea required class="textField textFieldQ" placeholder="Napište otázku"></textarea>
    </div>
    <div class="shortcut">
        <label class="textLabel" for="textField">Zkratka</label>
        <input required class="hint" type="text" maxlength="6" onInput=setWidth>
    </div>
    <div class="answer">
        <label class="textLabel" for="textField">Odpověď</label>
        <textarea required class="textField textFieldA" placeholder="Napište odpověď"></textarea>
    </div>
    <input type="button" class="button-18" value="Vyčistit">
</div>
</div>`;
}
function setWidth(text = undefined, HTMLobject) {
  if (!text) this.style.width = this.value.length + 3 + "ch";
  else HTMLobject.style.width = text.length + 3 + "ch";
}

function TFQuestionHTML(number) {
  return `<div class="questionContainer TFContainer" data-QNumber="${number}" data-TF="true">
<div class="wrap" >

        <div class="number"><p>${number}</p></div>
        <div class="question">
            <label class="textLabel" for="textField">Otázka</label>
            <textarea required class="textField" placeholder="Napište otázku"></textarea>
        </div>
        <div class="TF">
            <label class="textLabel" for="textField">Správná odpověď</label>



            <div class="TFButtons">                    <input type="button" value="ANO">
                <input type="button" value="NE"></div>


    </div>
</div>
</div>`;
}

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

// hints.forEach((hint) => {
//   hint.addEventListener("keypress", () => {
//     hint.style.width = `${hint.ariaValueMax.length + 3}ch`;
//     s;
//   });
// });

function renderQuestions() {
  for (let i = 0; i < 28; i++) {
    questionsContainers[0].insertAdjacentHTML("beforeend", questionHTML(i + 1));
    questionsContainers[1].insertAdjacentHTML(
      "beforeend",
      TFQuestionHTML(i + 1)
    );
  }
}

function developer__generateQnA() {
  console.log(textFieldsQ);
  textFieldsQ.forEach((textField, i) => {
    textField.value = `Jaké číslo má tato otázka s číslem ${i + 1}?`;
  });

  textFieldsA.forEach((textField, i) => {
    textField.value = `Michal Antonín Mrkos ${i + 1}`;
  });
}

function generateHints() {
  textFieldsA.forEach((textField, i) => {
    let hint = "";

    const seperatedAnswer = textField.value.split(" ");
    seperatedAnswer.forEach((word) => {
      hint += word[0];
    });

    setWidth(hint, hints[i]);
    hints[i].value = hint;
  });
}

developer__generateQnA();
generateHints();
