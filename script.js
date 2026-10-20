
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("formMessage");

        message.textContent =
            "Thank you, " + name +
            "! Your form works, but sending messages requires an email service.";

        contactForm.reset();
    });
}
