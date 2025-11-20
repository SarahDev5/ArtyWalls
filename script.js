
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');  
    navLinks.classList.toggle("show");
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const galleryImages = [
  "./images/peacock_lounge.jpg",
  "./images/dancer.jpg",
  "./images/poppies.jpg",
];

const galleryContainer = document.querySelector(".gallery-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Load gallery images
galleryImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery Image";
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = src;
  });
  galleryContainer.appendChild(img);
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


