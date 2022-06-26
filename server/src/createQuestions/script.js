"use strict";
const questionsContainers = document.querySelectorAll(".questions");
console.log(questionsContainers);
renderQuestions();
const textFieldsA = questionsContainers[0].querySelectorAll(".textFieldA");
const textFieldsQ = questionsContainers[0].querySelectorAll(".textFieldQ");
const textFieldsTF = questionsContainers[1].querySelectorAll(".textField");
const hints = document.querySelectorAll(".hint");
const shortcut = document.querySelector(".shortcut");
const upload = document.querySelector("#selectedFile");

//buttons
const generateHintsBTN = document.querySelectorAll(".generateHints");
const downloadQuestionsBTN = document.querySelector(".downloadQuestions");
const shuffleBTN = document.querySelector(".shuffle");
const TFButtonsContainers = document.querySelectorAll(".TFButtons");

TFButtonsContainers.forEach((container, i) => {
  container.addEventListener("click", (e) => {
    if (e.target.type != "button") return;
    console.log(container.children);
    if (e.target.classList[0] == "yes") {
      container.children[0].classList.add("chosen");
      container.children[1].classList.remove("chosen");
      container.dataset.state = "yes";
    }
    if (e.target.classList[0] == "no") {
      container.children[1].classList.add("chosen");
      container.children[0].classList.remove("chosen");
      container.dataset.state = "no";
    }
  });
});

shuffleBTN.addEventListener("click", () => {
  const data = generateData();
  if (!data) return;

  shuffle(data.normalQuestions);
  shuffle(data.TFQuestions);
  renderFromData(data);
});
upload.addEventListener("change", (e) => {
  try {
    const file = e.target.files[0];
    const fr = new FileReader();
    fr.readAsText(file);
    fr.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        console.log(data);
        renderFromData(data);
      } catch (err) {
        renderModal("Unable to load your file");
        console.error(err);
      }
    };
  } catch (err) {
    console.error(err);
  }
});

generateHintsBTN.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    generateHints();
  });
});
downloadQuestionsBTN.addEventListener("click", (e) => {
  const date = new Date();
  e.preventDefault();
  const data = generateData();
  if (!data) return;
  const json = JSON.stringify(data);
  const file = new Blob([json], { type: "application/json" });
  saveAs(
    file,
    "AZK" +
      date.getDate() +
      date.getMonth() +
      date.getHours() +
      date.getMinutes() +
      ".azk"
  );
});
function renderFromData(data) {
  data.normalQuestions.forEach((obj, i) => {
    textFieldsA[i].value = obj.answer;
    textFieldsQ[i].value = obj.question;
    setWidth(obj.hint, hints[i]);
    hints[i].value = obj.hint;
  });
  data.TFQuestions.forEach((obj, i) => {
    textFieldsTF[i].value = obj;
  });
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function modalHTML(text) {
  return `<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>${text}</p>
  </div>

</div>`;
}

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
    <input type="button" class="button-18 cleaner" value="Vyčistit">
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



            <div class="TFButtons" data-QNumber="${number}" data-state="">                    <input type="button" class="yes" value="ANO">
                <input class="no" type="button" value="NE"></div>


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
  textFieldsQ.forEach((textField, i) => {
    textField.value = `Jaké číslo má tato otázka s číslem ${i + 1}?`;
  });

  textFieldsA.forEach((textField, i) => {
    textField.value = `Michal Antonín Mrkos ${i + 1}`;
  });
  textFieldsTF.forEach((textField, i) => {
    textField.value = `Jaké číslo má tato TF otázka s číslem ${i + 1}`;
  });
}

function generateHints() {
  textFieldsA.forEach((textField, i) => {
    let hint = "";
    if (!textField.value) return;

    const seperatedAnswer = textField.value.split(" ");
    seperatedAnswer.forEach((word) => {
      hint += word[0];
    });

    setWidth(hint, hints[i]);
    hints[i].value = hint;
  });
  scroll(0, 0);
}

function checkFocus(Elarray, text, isTF = false) {
  if (
    !Array.from(Elarray).every((field) => {
      if (isTF) return field.dataset.state;
      else return field.value;
    })
  ) {
    renderModal(text);
    const unfilled = Array.from(Elarray).find((field) => {
      if (isTF) return !field.dataset.state;
      else return !field.value;
    });
    console.log(unfilled);
    if (isTF) unfilled.children[0].focus();
    else unfilled.focus();

    return false;
  } else return true;
}

function renderModal(text) {
  document.body.insertAdjacentHTML("beforeend", modalHTML(text));
  const modal = document.querySelector("#myModal");
  modal.querySelector(".close").addEventListener("click", () => {
    modal.remove();
  });
  window.addEventListener("click", (e) => {
    if (e.target == modal) modal.remove();
  });
}

function generateData() {
  if (
    !checkFocus(textFieldsQ, "Některé otázky nebyly vyplňeny, prosím vyplňte")
  )
    return;
  if (
    !checkFocus(textFieldsA, "Některé odpovědi nebyly vyplňeny, prosím vyplňte")
  )
    return;
  if (
    !checkFocus(
      hints,
      "Některé zkratky nebyly vyplňeny, prosím vygenerujte, nebo vyplňte"
    )
  )
    return;
  if (
    !checkFocus(
      textFieldsTF,
      "Některé Otázky Ano/Ne nebyly vyplňeny, prosím vyplňte"
    )
  )
    return;
  if (!checkFocus(TFButtonsContainers, "Některá ANO/NE nebyla vybrána", true))
    return;

  const data = {
    normalQuestions: Array.from(textFieldsQ).map((field, i) => {
      return {
        question: field.value,
        answer: textFieldsA[i].value,
        hint: hints[i].value,
      };
    }),
    TFQuestions: Array.from(textFieldsTF).map((field, i) => {
      return {
        question: field.value,
        answer: TFButtonsContainers[i].dataset.state,
      };
    }),
  };

  console.log(data);

  return data;
}

developer__generateQnA();
