
const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    response.textContent =
        `Thank you, ${name}! Your message was submitted successfully in this demo.`;

    contactForm.reset();
});
