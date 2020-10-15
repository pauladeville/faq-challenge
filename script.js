const accordions = document.querySelectorAll(".accordion");

for (let accordion of accordions) {
    accordion.addEventListener("click", function() {
        if(document.getElementsByClassName("displayed-answer")) {
            this.classList.remove("displayed-answer");
        }
        accordion.querySelector(".answer").classList.toggle("displayed-answer");
        accordion.querySelector(".question").classList.toggle("selected-question");
        accordion.querySelector(".arrow").classList.toggle("upside-arrow");
    })
}