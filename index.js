let count = 0;

const intervalId = setInterval(() => {
  console.log("Повідомлення " + (++count));
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Інтервал зупинено.");
  }
}, 1000);








const elements = document.querySelectorAll('.animated-element');

setInterval(() => {
  elements.forEach(element => {
    const newSize = Math.floor(Math.random() * 50) + 50; 
    const newPositionX = Math.random() * window.innerWidth;
    const newPositionY = Math.random() * window.innerHeight;

    element.style.width = newSize + 'px';
    element.style.height = newSize + 'px';
    element.style.left = newPositionX + 'px';
    element.style.top = newPositionY + 'px';
  });
}, 2000);






let score = 0;

    function increaseScore() {
      score++;
      document.getElementById('score').innerText = 'Score: ' + score;
    }

    setInterval(() => {
      const element = document.createElement('div');
      element.className = 'interactive-element';
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.top = Math.random() * window.innerHeight + 'px';

      element.addEventListener('click', () => {
        document.body.removeChild(element);
        increaseScore();
      });

      document.body.appendChild(element);
    }, 1000);






    const userInput = prompt("Введіть час у секундах:");

if (userInput !== null) {
  const timeInSeconds = parseInt(userInput, 10);

  setTimeout(() => {
    console.log("Час вийшов! Повідомлення після " + timeInSeconds + " секунд.");
  }, timeInSeconds * 1000);
} else {
  console.log("Введено некоректні дані.");
}