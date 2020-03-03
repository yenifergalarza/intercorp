// const selected1 = document.querySelector(".selected");
// const optionsContainer1 = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected1.addEventListener("click", () => {
//     optionsContainer1.classList.toggle("active");
// });

// optionsList.forEach(o => {
//     o.addEventListener("click", () => {
//         selected1.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer1.classList.remove("active");
//     });
// });


const selected1 = document.querySelector(".s1");
const optionsContainer1 = document.querySelector(".oc1");

const optionsList = document.querySelectorAll(".o1");

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



const selected3 = document.querySelector(".s3");
const optionsContainer3 = document.querySelector(".oc3");
const optionsList3 = document.querySelectorAll(".o3");

selected3.addEventListener("click", () => {
    optionsContainer3.classList.toggle("active");
});

optionsList3.forEach(o => {
    o.addEventListener("click", () => {
        selected3.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer3.classList.remove("active");
    });
});




const selected4 = document.querySelector(".s4");
const optionsContainer4 = document.querySelector(".oc4");
const optionsList4 = document.querySelectorAll(".o4");

selected4.addEventListener("click", () => {
    optionsContainer4.classList.toggle("active");
});

optionsList4.forEach(o => {
    o.addEventListener("click", () => {
        selected4.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer4.classList.remove("active");
    });
});


const jobs = [{
        id: 1,
        title: "Product Manager",
        level: "Especialista",
        area: "Contabilidad",
        modalidad: "tiempo completo",
        time: "00/00/0000",
        company: "promart"
    },
    {
        id: 1,
        title: "Product Manager",
        level: "Trainee",
        area: "Contabilidad",
        modalidad: "tiempo completo",
        time: "00/00/0000",
        company: "promart"
    }


]