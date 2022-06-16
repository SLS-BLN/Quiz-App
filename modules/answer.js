function answer() {
  // select all cards - nodeList
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(card => {
    // inside a single card - nodeListItem / scope
    const answerButton = card.querySelector('.question-card__button');
    const answer = card.querySelector('.question-card__answer');
    answerButton.addEventListener('click', function () {
      answer.classList.toggle('hide-answer');
      // change button text
      if (answer.classList.contains('hide-answer')) {
        answerButton.innerText = 'Show Answer';
      } else {
        answerButton.innerText = 'Hide Answer';
      }
    });
  });
}

export { answer };
