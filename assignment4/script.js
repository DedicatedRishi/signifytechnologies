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
