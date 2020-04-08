const cards = document.querySelectorAll(".card.border-shadow");
cards.forEach(
    (cardEach) => {
        const iconCard = cardEach.querySelector(".card-img-top");
        cardEach.addEventListener("mouseover", () => {
            iconCard.classList.add("scale-icon");
        });
        cardEach.addEventListener("mouseleave", () => {
            iconCard.classList.remove("scale-icon");
        });


    });