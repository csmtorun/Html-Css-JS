var cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    price: "$25,000",
    image: "images/car22.jpg"
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2022,
    price: "$26,500",
    image: "images/cars2.jpg"
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: "$40,000",
    image: "images/car34.jpg"
  }
];

const allCarsHeading = document.querySelector('#circle a');

// Define the initial width of the heading
const initialWidth = allCarsHeading.offsetWidth;

// Define the animation properties using Anime.js
anime({
  targets: allCarsHeading,
  width: [initialWidth, initialWidth * 0.5], // Change the width from initial width to half of it
  duration: 1000, // Animation duration in milliseconds
  loop: true, // Loop the animation infinitely
  direction: 'alternate', // Reverse the animation direction after each loop
  easing: 'easeInOutSine' // Use a smooth easing function
});

