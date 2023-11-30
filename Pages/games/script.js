const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
const colorDisplay = document.getElementById("color-display");
const colorOptionsContainer = document.getElementById("color-options");

// Function to generate a random color from the colors array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to set up a new round of the game
function setupRound() {
  const targetColor = getRandomColor();
  colorDisplay.style.backgroundColor = targetColor;

  colorOptionsContainer.innerHTML = "";
  colors.forEach((color) => {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener("click", () =>
      checkAnswer(color, targetColor)
    );
    colorOptionsContainer.appendChild(colorOption);
  });
}

// Function to check the player's answer
function checkAnswer(selectedColor, targetColor) {
  if (selectedColor === targetColor) {
    alert("Congratulations! You got it right!");
  } else {
    alert("Wrong answer. Try again!");
  }

  // Set up a new round after the alert is closed
  setupRound();
}

// Initial setup
setupRound();
