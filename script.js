const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;

function randomPosition() {
  const x = Math.random() * (game.clientWidth - 50);
  const y = Math.random() * (game.clientHeight - 50);
  return { x, y };
}

function spawnBox() {
  const box = document.createElement('div');
  box.classList.add('box');

  const { x, y } = randomPosition();
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;

  box.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    game.removeChild(box);
  });

  game.appendChild(box);

  setTimeout(() => {
    if (game.contains(box)) {
      game.removeChild(box);
    }
  }, 1000);
}

function startGame() {
  const gameInterval = setInterval(spawnBox, 800);

  const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      clearInterval(gameInterval);
      alert(`Time's up! Final score: ${score}`);
    }
  }, 1000);
}

startGame();
