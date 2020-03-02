const selected1 = document.querySelector(".selected");
const optionsContainer1 = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected1.addEventListener("click", () => {
    optionsContainer1.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected1.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer1.classList.remove("active");
    });
});


const selected2 = document.querySelector(".s2");
const optionsContainer2 = document.querySelector(".oc2");
const optionsList2 = document.querySelectorAll(".o2");

selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
    o.addEventListener("click", () => {
        selected2.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active");
    });
});