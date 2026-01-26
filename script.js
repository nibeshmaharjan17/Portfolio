const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Thank you! Your message has been sent.";
    msg.style.color = "#6c63ff";
    form.reset();
});
