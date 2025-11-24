// fade-in animation
const sections = document.querySelectorAll(".fade-section");

function revealSections() {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// theme toggle
const btn = document.getElementById("toggle-theme");
btn.onclick = () => {
    document.body.classList.toggle("dark");
};
