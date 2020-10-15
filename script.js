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

for (let accordion of accordions) {
    accordion.addEventListener("mouseover", function() {
        document.querySelector("#img-box-desktop").classList.add("translated-box");
    })
}

for (let accordion of accordions) {
    accordion.addEventListener("mouseout", function() {
        document.querySelector("#img-box-desktop").classList.remove("translated-box");
    })
}



