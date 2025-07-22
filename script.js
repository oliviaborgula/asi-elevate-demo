// Progress bar logic
const totalPointsPossible = 1000;
const currentPoints = 450; // Update this dynamically if needed

window.onload = () => {
  const fill = document.querySelector('.points-bar-fill');
  const percent = Math.min((currentPoints / totalPointsPossible) * 100, 100);
  fill.style.width = percent + '%';
};

// Popup logic for redeem form
const modal = document.getElementById("redeemModal");
const openBtn = document.querySelector(".redeem-btn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("redeemForm").addEventListener("submit", function(e) {
  e.preventDefault();
  modal.style.display = "none";  // Just hide the modal
  this.reset();                  // Clear the form fields
});
