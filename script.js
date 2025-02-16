let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

// Function to close the navbar
function closeNavbar() {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

// Toggle navbar on menu icon click
menuIcon.addEventListener("click", (event) => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  event.stopPropagation(); // Prevents immediate closing when clicking menuIcon
});

// Close navbar when clicking a menu link (only on small screens)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeNavbar();
    }
  });
});

const colorInput = document.getElementById('colorInput');
const rainbowSpinner = document.getElementById('rainbow-spinner');

// Function to trigger the hidden color input when clicking the spinner
function triggerColorInput() {
  colorInput.click();
}

// Update the --main-color variable and the spinner colors to the selected color
function updateColor() {
  const selectedColor = colorInput.value;

  // Update the --main-color CSS variable
  document.documentElement.style.setProperty('--main-color', selectedColor);
  
  // Update the rainbow spinner's colors (this step might be redundant now)
  rainbowSpinner.style.borderTopColor = selectedColor;
  rainbowSpinner.style.borderRightColor = selectedColor;
  rainbowSpinner.style.borderBottomColor = selectedColor;
  rainbowSpinner.style.borderLeftColor = selectedColor;
}

// Initialize EmailJS with your User ID
emailjs.init("YOUR_USER_ID");  // Replace with your EmailJS User ID

// Add event listener to the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Collect form data
  var templateParams = {
    full_name: document.getElementById("full_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  // Send the email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      alert("Message sent successfully!");  // Success message
    }, function(error) {
      alert("Error sending message: " + JSON.stringify(error));  // Error message
    });
});