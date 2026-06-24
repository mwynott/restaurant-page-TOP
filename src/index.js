import Home from "./home.js";

// Load home content on initial page load
Home();

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const content = document.getElementById("content");
    content.innerHTML = "";

    if (event.target.textContent === "Home") {
      Home();
    } else if (event.target.textContent === "Menu") {
      import("./menu.js").then(module => module.default());
    } else if (event.target.textContent === "Contact") {
      import("./contact.js").then(module => module.default());
    }
  });
});