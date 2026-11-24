const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section-heading, .about-text, .about-details, .timeline-item, .skill-card"
).forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});


// contact f

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const recipient = "YOUR_EMAIL@example.com";

        const emailBody =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailtoLink =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    });
}

