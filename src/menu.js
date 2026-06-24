const Menu = () => {
    const parentElement = document.getElementById("content");
    const menuContent = document.createElement("div");
    menuContent.textContent = "Check out our delicious menu!";
    parentElement.appendChild(menuContent);
}






export default Menu;