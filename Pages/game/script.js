const secretNumber = 34; // Set the specific number to guess
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const resultElement = document.getElementById("result");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultElement.style.color = "red";
    resultElement.textContent =
      "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;

    if (guess === secretNumber) {
      resultElement.style.color = "green";
      resultElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts. 🎉`;
    } else {
      const hint = guess < secretNumber ? "higher" : "lower";
      resultElement.style.color = "red";
      resultElement.textContent = `Incorrect. Try again. Hint: Go ${hint}.`;
    }
  }
}
