const rangeInput = document.querySelector("#number_range input");

const HIDDEN_CLASSNAME = "hidden";

//범위설정

const guessForm = document.querySelector("#number_guess");
const guessNumberInput = document.querySelector(
  "#number_guess input:first-child"
);
const guessSubmitInput = document.querySelector(
  "#number_guess input:last-child"
);

const youChoose = document.querySelector("#you-choose");
const comChoose = document.querySelector("#com-choose");
const gameResult = document.querySelector("#result");

const range = parseInt(rangeInput.value);

function selectNumber(event) {
  event.preventDefault();
  const yourNumber = parseInt(guessNumberInput.value);
  youChoose.classList.remove(HIDDEN_CLASSNAME);
  youChoose.innerText = `You chose: ${yourNumber}`;
  randomNumber(event);
}

function randomNumber(event) {
  event.preventDefault();
  const comNumber = Math.ceil(Math.random() * rangeInput.value);
  comChoose.classList.remove(HIDDEN_CLASSNAME);
  comChoose.innerText = `, the machine chose: ${comNumber}`;
  result(event);
}

function result(event) {
  const yourNumber = parseInt(guessNumberInput.value);
  const comNumber = Math.ceil(Math.random() * rangeInput.value);
  event.preventDefault();
  gameResult.classList.remove(HIDDEN_CLASSNAME);

  if (yourNumber === comNumber) {
    gameResult.innerText = `You won!`;
  } else {
    gameResult.innerText = `You lost...`;
  }
}

guessForm.addEventListener("submit", selectNumber);
