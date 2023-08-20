document.addEventListener("DOMContentLoaded", function () {
    const faqSections = document.querySelectorAll(".faq-section");

    faqSections.forEach(section => {
        section.addEventListener("click", () => {
            section.classList.toggle("active");
            const answer = section.querySelector(".faq-answer");
            if (section.classList.contains("active")) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("current-date").textContent = currentDate;
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
