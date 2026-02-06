// Subtle fade-in on load
document.body.style.opacity = 0;

window.onload = () => {
  document.body.style.transition = "opacity 1s";
  document.body.style.opacity = 1;
};
