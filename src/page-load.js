const pageLoad = () => {
    const parentElement = document.getElementById("content");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    parentElement.prepend(home);
    parentElement.prepend(menu);
    parentElement.prepend(contact);
};

export default pageLoad;