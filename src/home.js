const Home = () => {
    const parentElement = document.getElementById("content");

    const home_grid = document.createElement("div");
    home_grid.classList.add("home_grid");

    const home_heading = document.createElement("h2");
    home_heading.classList.add("home_heading");
    home_heading.textContent = "Welcome to Restaurant Name! We serve the best pizza in town!";

    const home_info = document.createElement("div");
    home_info.classList.add("home_info");
    home_info.textContent = `This is filler text for the restaurant where some info
    about when it was established, what kind of pizza they serve, and whatever else
    might endear the restaurant to prospective customers!\n
        This is a second paragraph doing the same as above, perhaps assuring the customer
        that while times have changed, our recipe hasn't!`;



    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.textContent = "Hours:\nMon-Sat: 11AM - 11PM\nSun: 11AM - 8PM"

    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "123 Eatery Way, Flavortown, MA"
    
    parentElement.appendChild(home_grid);
    home_grid.appendChild(home_heading);
    home_grid.appendChild(home_info);
    home_grid.appendChild(hours);
    home_grid.appendChild(location);
}

export default Home;