const choiceLevelOne = document.querySelector(".choice-level_one");
const choiceLevelTwo = document.querySelector(".choice-level_two");
const choiceLevelThree = document.querySelector(".choice-level_three");



choiceLevelOne.addEventListener("click", () => {
    if (choiceLevelOne.classList.contains("choice-level_one")) {
        choiceLevelOne.classList.add("choice-level_border");
        choiceLevelOne.classList.remove("choice-level_one");
        localStorage.setItem("choiceLevel", "1")

        choiceLevelTwo.classList.add("choice-level_two");
        choiceLevelTwo.classList.remove("choice-level_border");

        choiceLevelThree.classList.add("choice-level_three");
        choiceLevelThree.classList.remove("choice-level_border");
    } else {
        choiceLevelOne.classList.add("choice-level_one");
        choiceLevelOne.classList.remove("choice-level_border");
    }
});

choiceLevelTwo.addEventListener("click", () => {
    if (choiceLevelTwo.classList.contains("choice-level_two")) {
        choiceLevelTwo.classList.toggle("choice-level_border");
        choiceLevelTwo.classList.remove("choice-level_two");
        localStorage.setItem("choiceLevel", "2")

        choiceLevelThree.classList.add("choice-level_three");
        choiceLevelThree.classList.remove("choice-level_border");

        choiceLevelOne.classList.add("choice-level_one");
        choiceLevelOne.classList.remove("choice-level_border");
    } else {
        choiceLevelTwo.classList.add("choice-level_two");
        choiceLevelTwo.classList.remove("choice-level_border");
    }
});

choiceLevelThree.addEventListener("click", () => {
    if (choiceLevelThree.classList.contains("choice-level_three")) {
        choiceLevelThree.classList.add("choice-level_border");
        choiceLevelThree.classList.remove("choice-level_three");
        localStorage.setItem("choiceLevel", "3")
        
        choiceLevelTwo.classList.add("choice-level_two");
        choiceLevelTwo.classList.remove("choice-level_border");

        choiceLevelOne.classList.add("choice-level_one");
        choiceLevelOne.classList.remove("choice-level_border");
    } else {
        choiceLevelThree.classList.add("choice-level_three");
        choiceLevelThree.classList.remove("choice-level_border");
    }
});