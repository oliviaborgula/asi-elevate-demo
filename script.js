const totalPointsPossible = 1000;
const currentPoints = 450; // Update this dynamically if needed

window.onload = () => {
  const fill = document.querySelector('.points-bar-fill');
  const percent = Math.min((currentPoints / totalPointsPossible) * 100, 100);
  fill.style.width = percent + '%';
};