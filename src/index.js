// Challenge 1
// Log li with id special

let special = document.querySelector("#special");
console.log(special);

// Challenge 2
// Log all li with class of country

let country = document.querySelectorAll("ul .country");
console.log(country);

// Challenge 3
// Add class special to the li with id special

let classSpecial = document.querySelector("#special");
classSpecial.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)

special.innerHTML = "South Korea 🇰🇷";
