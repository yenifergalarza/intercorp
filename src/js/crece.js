const arrOfCategory = [0, 0, 0, 0, 0];

const selected0 = document.querySelector(".s0");
const optionsContainer0 = document.querySelector(".oc0");
const optionsList0 = document.querySelectorAll(".o0");

selected0.addEventListener("click", () => {
    optionsContainer0.classList.toggle("active");
});

optionsList0.forEach(o => {
    o.addEventListener("click", () => {
        selected0.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer0.classList.remove("active");
        arrOfCategory.splice(0, 1, o.querySelector("label").innerHTML);
    });
});



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
        arrOfCategory.splice(1, 1, o.querySelector("label").innerHTML);
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
        arrOfCategory.splice(2, 1, o.querySelector("label").innerHTML);
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
        arrOfCategory.splice(3, 1, o.querySelector("label").innerHTML);
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
        arrOfCategory.splice(4, 1, o.querySelector("label").innerHTML);
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

const btnFilterDesktop = document.getElementById("btnFilterDesktop");
const hideCaptionFiltered = document.getElementById("hideCaptionFiltered");
const showFilters = document.getElementById("showFilters");
const parentOfNodes = document.getElementById("parentOfNodes");




function makeDiv(array) {
    if (document.querySelector(".margin-top_grow-pill")) {
        document.querySelector(".margin-top_grow-pill").remove()
    }
    let listPill = document.createElement('div');
    listPill.classList.add('d-flex', 'w-100', "margin-top_grow-pill");
    for (let i = 0; i < array.length; i++) {

        const item = document.createElement('div');
        const cross = document.createElement('i')
        cross.classList.add('fa', 'fa-times');
        item.classList.add('container_pill', 'b_blue4', 'montserrat-sb', 'color-darkish-blue');
        cross.setAttribute("id", `${i}`);
        item.appendChild(document.createTextNode(array[i]));


        item.appendChild(cross);
        if (array[i] != 0) {
            listPill.appendChild(item);
        }

        cross.addEventListener("click", () => {
            console.log("borre" +
                cross.id
            );
            array[cross.id] = 0;
            console.log(arrOfCategory);
            item.remove()



        })

    }


    return listPill;
}




btnFilterDesktop.addEventListener("click", () => {
    console.log("click en filtro");
    console.log(hideCaptionFiltered)
    if (hideCaptionFiltered) {
        // parentOfNodes.removeChild(hideCaptionFiltered);
        hideCaptionFiltered.remove()
    }

    console.log(arrOfCategory);

    showFilters.appendChild(makeDiv(arrOfCategory));

});