const Menu = () => {
    const parentElement = document.getElementById("content");

    const section = document.createElement("div");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    section.classList.add("menu-heading");
    heading.textContent="Our Menu";
  
    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    parentElement.appendChild(section);
    section.appendChild(heading);
    section.appendChild(grid);
}

export default Menu;