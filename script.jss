// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable: card element
const card = document.getElementById('card');
const animateBtn = document.getElementById('animateBtn');
const toggleLoadingBtn = document.getElementById('toggleLoadingBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

// Function to flip the card (toggle class)
// No parameters, no return needed because operates on global card element
function flipCard() {
  card.classList.toggle('flipped');
}

// Function to add pulsing animation to card for given duration (ms)
// Uses parameter duration and returns a Promise to allow chaining
function pulseCard(duration) {
  return new Promise((resolve) => {
    card.classList.add('pulsing');
    // Remove animation class after duration ends
    setTimeout(() => {
      card.classList.remove('pulsing');
      resolve(); // Notify when animation ends
    }, duration);
  });
}

// Function to toggle loading spinner visibility
// Uses parameter boolean 'show' and returns current visibility state
function toggleLoading(show) {
  if (show) {
    loadingSpinner.classList.remove('hidden');
  } else {
    loadingSpinner.classList.add('hidden');
  }
  return !loadingSpinner.classList.contains('hidden');
}

// Part 3: Combining CSS Animations with JavaScript

// Animate button triggers pulsing and flip animation sequentially
animateBtn.addEventListener('click', async () => {
  await pulseCard(2000); // pulse for 2 seconds
  flipCard();
});

// Card flips on click (independent toggle)
card.addEventListener('click', flipCard);

// Toggle loading spinner on button click
let loadingVisible = false;
toggleLoadingBtn.addEventListener('click', () => {
  loadingVisible = toggleLoading(!loadingVisible);
});
