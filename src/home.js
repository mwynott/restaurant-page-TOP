const Home = () => {
    const parentElement = document.getElementById("content");

    const home_grid = document.createElement("div");
    home_grid.classList.add("home_grid");

    const home_heading = document.createElement("h2");
    home_heading.classList.add("home_heading");
    home_heading.textContent = "Welcome to our restaurant! We serve the best food in town.";

    const home_info = document.createElement("div");
    home_info.classList.add("home_info");
    home_info.textContent = `This is filler text for the restaurant where some info
    about when it was established, what kind of food they serve, and whatever else
    might endear the restaurant to prospective customers!`;
    
    parentElement.appendChild(home_grid);
    home_grid.appendChild(home_heading);
    home_grid.appendChild(home_info);
}

export default Home;