const Contact = () => {
    const parentElement = document.getElementById("content");

    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contactGrid");

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contactHeading");
    contactHeading.textContent = "Get in touch with us!";

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");
    contactInfo.textContent = `Pickup/Delivery: 555-555-5555
    Catering: 555-444-4444`;

    parentElement.appendChild(contactGrid);
    contactGrid.appendChild(contactHeading);
    contactGrid.appendChild(contactInfo);
}

export default Contact;