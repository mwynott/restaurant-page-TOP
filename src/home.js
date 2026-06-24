const Home = () => {
    const parentElement = document.getElementById("content");
    const homeContent = document.createElement("div");
    homeContent.textContent = "Welcome to our restaurant! We serve the best food in town.";
    parentElement.appendChild(homeContent);
}







export default Home;