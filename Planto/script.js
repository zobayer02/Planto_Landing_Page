// You can add any interactive JavaScript here if needed in the future.
console.log("Planto website loaded successfully!");


// JavaScript for Slider Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to update the slider
function updateSlider(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Add active class to the current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Auto-slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}, 5000);

// Add click event to dots for manual navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});



document.querySelector('.three-bar').addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('active');
});







// Function to open the video modal
function openVideo() {
  const videoModal = document.getElementById('videoModal');
  const youtubeVideo = document.getElementById('youtubeVideo');

  // Set the YouTube video URL with autoplay
  youtubeVideo.src = 'https://www.youtube.com/embed/MEGdcf4jKD0?autoplay=1';

  // Show the modal
  videoModal.style.display = 'flex';
}

// Function to close the video modal
function closeVideo() {
  const videoModal = document.getElementById('videoModal');
  const youtubeVideo = document.getElementById('youtubeVideo');

  // Hide the modal and stop the video
  videoModal.style.display = 'none';
  youtubeVideo.src = ''; // Clear the src to stop the video
}









// Example: Dynamically update the rating
const ratingStars = document.querySelectorAll('.star');
const ratingValue = 4; // Change this value to update the rating

ratingStars.forEach((star, index) => {
  if (index < ratingValue) {
    star.innerHTML = '&#9733;'; // Filled star
  } else {
    star.innerHTML = '&#9734;'; // Empty star
  }
});







document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  alert("Thank you for subscribing!");
});
