const form = document.querySelector(".form-holder");
const scoreDisplay = document.querySelector(".score");
const questionsList = document.querySelectorAll(".question");

const correctAnswers = ["A", "A", "A", "A", "A"];
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAnswers = [
    form.question1.value,
    form.question2.value,
    form.question3.value,
    form.question4.value,
    form.question5.value,
  ];

  let scoreCounter = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      questionsList[index].classList.add("correct");
      scoreCounter += 1;
    } else {
      questionsList[index].classList.add("wrong");
    }
  });

  scoreDisplay.classList.remove("hide");
  scoreDisplay.querySelector("p").textContent = `You scored ${scoreCounter}/5`;
  scrollTo(0, 0);
});
