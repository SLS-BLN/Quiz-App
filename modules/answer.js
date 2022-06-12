function toggleAnswer() {
  // select all cards - nodeList
  const cards = document.querySelectorAll(".question-card");
  cards.forEach((card) => {
    // inside a single card - nodeListItem / scope
    const answerButton = card.querySelector(".question-card__button");
    const answer = card.querySelector(".question-card__answer");
    answerButton.addEventListener("click", function () {
      answer.classList.toggle("hide-answer");
      // change button text
      if (answerButton.innerHTML === "Show Answer") {
        answerButton.innerHTML = "Hide Answer";
      } else {
        answerButton.innerHTML = "Show Answer";
      }
    });
  });
}

export { toggleAnswer };
