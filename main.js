const startButton = document.querySelector(".start-button");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const cardsSix = document.querySelector(".cards-six");
const cardsTwelve = document.querySelector(".cards-twelve");
const cardsEighteen = document.querySelector(".cards-eighteen");


startButton.addEventListener("click", () => {
  const selectedRate = window.localStorage.getItem("choiceLevel");
  if (selectedRate=== "1") {
    container.removeChild(content);
    cardsSix.style.display = "grid"
    
  } else if (selectedRate === "2") {
    container.removeChild(content);
    cardsTwelve.style.display = "grid"
  }  else if (selectedRate === "3") {
    container.removeChild(content);
    cardsEighteen.style.display = "grid"
  }
});
