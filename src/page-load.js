const pageLoad = () => {
    const parentElement = document.getElementById("content");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    parentElement.appendChild(home);
    parentElement.appendChild(menu);
    parentElement.appendChild(contact);
};

export default pageLoad;