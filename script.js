const firstHorse = document.querySelector(".horse1");
const secondHorse = document.querySelector(".horse2");
const thirdHorse = document.querySelector(".horse3");
const startButton = document.querySelector(".startBtn");
const horseAudio = document.querySelector(".horseAudioMp3");
const horseList = document.querySelector(".horseList");
const amount = document.querySelector(".amount");
const depositButton = document.querySelector(".depositBtn");
const price = document.querySelector(".price");

let amountOfDeposit;
let chosenHorse = "";
let wallet = 0;
let winnerHorse = "";
startButton.disabled = true;

depositButton.addEventListener("click", (e) => {
  e.preventDefault();
  chosenHorse = horseList.value;

  if (amount.value.match(/^[0-9]+$/) && amount.value[0] != 0) {
    amountOfDeposit = amount.value;
    amount.value = 0;
    horseList.options.selectedIndex = 0;
    startButton.disabled = false;
    depositButton.disabled = true;
    amount.disabled = true;
    horseList.disabled = true;
  } else {
    alert("Input contains only numbers. For example: 200, 450, ...");
  }
});

startButton.addEventListener("click", () => {
  horseAudio.currentTime = 0;
  horseAudio.play();

  let firstHorsePlace = 0;
  let secondHorsePlace = 0;
  let thirdHorsePlace = 0;

  startButton.disabled = true;

  let race = setInterval(function () {
    firstHorsePlace += Math.round(Math.random() * 20);
    firstHorse.style.left = `${firstHorsePlace}px`;

    secondHorsePlace += Math.round(Math.random() * 20);
    secondHorse.style.left = `${secondHorsePlace}px`;

    thirdHorsePlace += Math.round(Math.random() * 20);
    thirdHorse.style.left = `${thirdHorsePlace}px`;

    if (
      firstHorsePlace >= 600 ||
      secondHorsePlace >= 600 ||
      thirdHorsePlace >= 600
    ) {
      clearInterval(race);
      horseAudio.pause();

      if (firstHorsePlace >= 600) {
        alert("First horse win!");
        winnerHorse = "firstHorse";

        firstHorsePlace = 0;
        secondHorsePlace = 0;
        thirdHorsePlace = 0;

        firstHorse.style.left = "0px";
        secondHorse.style.left = "0px";
        thirdHorse.style.left = "0px";

        startButton.disabled = true;
        depositButton.disabled = false;
        amount.disabled = false;
        horseList.disabled = false;
      } else if (secondHorsePlace >= 600) {
        alert("Second horse win!");
        winnerHorse = "secondHorse";

        firstHorsePlace = 0;
        secondHorsePlace = 0;
        thirdHorsePlace = 0;

        firstHorse.style.left = "0px";
        secondHorse.style.left = "0px";
        thirdHorse.style.left = "0px";

        startButton.disabled = true;
        depositButton.disabled = false;
        amount.disabled = false;
        horseList.disabled = false;
      } else if (thirdHorsePlace >= 600) {
        alert("Third horse win!");
        winnerHorse = "thirdHorse";

        firstHorsePlace = 0;
        secondHorsePlace = 0;
        thirdHorsePlace = 0;

        firstHorse.style.left = "0px";
        secondHorse.style.left = "0px";
        thirdHorse.style.left = "0px";

        startButton.disabled = true;
        depositButton.disabled = false;
        amount.disabled = false;
        horseList.disabled = false;
      }

      if (chosenHorse === winnerHorse) {
        wallet += amountOfDeposit * 2;
        price.innerText = wallet;
      } else {
        wallet -= amountOfDeposit;
        price.innerText = wallet;
      }
    }
  }, 150);
});
