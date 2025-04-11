
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Built to Execute. Powered to Scale.",
    "Your AI Business Partner, 24/7.",
    "No dashboards. Just results.",
    "Activate growth. Instantly."
  ];
  const headline = document.getElementById("rotating-headline");
  let index = 0;
  setInterval(() => {
    headline.textContent = messages[index];
    index = (index + 1) % messages.length;
  }, 4000);
});
