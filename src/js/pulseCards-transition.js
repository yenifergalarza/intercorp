const cards = document.querySelectorAll(".hoverPulse");
cards.forEach(
    (cardEach) => {

        cardEach.addEventListener("mouseover", () => {
            cardEach.classList.remove("pulseOut");
            cardEach.classList.add("animated", "pulse");

        });
        cardEach.addEventListener("mouseleave", () => {
            cardEach.classList.remove("pulse");
            cardEach.classList.add("animated", "pulseOut");
        });


    });