document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Built for action, not distraction.",
    "No guesswork. Just growth.",
    "The execution layer between strategy and results.",
    "Your AI Business Partner. 24/7."
  ];
  const headline = document.getElementById("rotating-headline");
  let index = 0;
  setInterval(() => {
    headline.textContent = messages[index];
    index = (index + 1) % messages.length;
  }, 4000);
});
