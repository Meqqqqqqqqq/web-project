window.addEventListener("load", () => {
    const navItems = document.querySelectorAll(".navbar li");

    navItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(-20px)";

        setTimeout(() => {
            item.style.transition = "0.5s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 150);
    });
});

window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".scroll-animate");

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("show");
        }
    });
});
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));