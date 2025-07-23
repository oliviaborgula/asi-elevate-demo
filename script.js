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

function toggleChatbox() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const chatBody = document.getElementById("chatbox-body");

  // User message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatBody.appendChild(userMsg);

  // Bot placeholder response
  const botMsg = document.createElement("p");
  botMsg.innerHTML = `<strong>ASI:</strong> This is where the AI-generated response will go.`;
  chatBody.appendChild(botMsg);

  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  // Clear input
  input.value = "";
}

function toggleChatbox() {
  const chatbox = document.getElementById("chatbox");
  const iconContainer = document.querySelector(".chatbot-icon-container");
  
  if (chatbox.style.display === "flex") {
    // Close chatbox
    chatbox.style.display = "none";
    iconContainer.style.visibility = "visible";
  } else {
    // Open chatbox
    chatbox.style.display = "flex";
    iconContainer.style.visibility = "hidden";  // Hide icon behind chatbox
  }
}

// Make all icon-boxes open the redeem modal on click
document.querySelectorAll(".icon-box").forEach((box) => {
  box.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

