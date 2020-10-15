const accordions = document.querySelectorAll(".accordion");

for (let accordion of accordions) {
    accordion.addEventListener("click", () => {
        accordion.querySelector(".answer").classList.toggle("answer--active");
        accordion.querySelector(".question").classList.toggle("question--active");
        accordion.querySelector(".arrow").classList.toggle("arrow--active");
    })
};

document.getElementById("faq").addEventListener("mouseover", () => {
    document.querySelector(".img-box-desktop").classList.add("img-box-desktop--active");
})
document.getElementById("faq").addEventListener("mouseout", () => {
    document.querySelector(".img-box-desktop").classList.remove("img-box-desktop--active");     
});
