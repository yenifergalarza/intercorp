// const arrOfCategory = [0, 0, 0, 0, 0];

// const cellOne = document.getElementById("firstTableCell");
// const selected1 = document.querySelector(".s1");
// const optionsContainer1 = document.querySelector(".oc1");
// const optionsList1 = document.querySelectorAll(".o1");
// const selected2 = document.querySelector(".s2");
// const optionsContainer2 = document.querySelector(".oc2");
// const optionsList2 = document.querySelectorAll(".o2");
// const selected3 = document.querySelector(".s3");
// const optionsContainer3 = document.querySelector(".oc3");
// const optionsList3 = document.querySelectorAll(".o3");
// const selected4 = document.querySelector(".s4");
// const optionsContainer4 = document.querySelector(".oc4");
// const optionsList4 = document.querySelectorAll(".o4");
// const redirect = (cell, link) => {
//     if (window.innerWidth <= 992) {
//         cell.addEventListener("click", () => {
//             window.location.href = link;
//         })
//     }

// };
// console.log(innerWidth);
// redirect(cellOne, "../crecedetalle.html");
// const handlingSelect = (selectedNumero, optionsContainerNumero, optionsListNumero, numero) => {
//     selectedNumero.addEventListener("click", () => {
//         optionsContainerNumero.classList.toggle("active");
//     });
//     optionsListNumero.forEach(o => {
//         o.addEventListener("click", () => {
//             selectedNumero.innerHTML = o.querySelector("label").innerHTML;
//             optionsContainerNumero.classList.remove("active");
//             arrOfCategory.splice(numero, 1, o.querySelector("label").innerHTML);
//             console.log(arrOfCategory);

//         });
//     });

// };

// handlingSelect(selected1, optionsContainer1, optionsList1, 1);
// handlingSelect(selected2, optionsContainer2, optionsList2, 2);
// handlingSelect(selected3, optionsContainer3, optionsList3, 3);
// handlingSelect(selected4, optionsContainer4, optionsList4, 4);

// const btnFilterDesktop = document.getElementById("btnFilterDesktop");
// const hideCaptionFiltered = document.getElementById("hideCaptionFiltered");
// const showFilters = document.getElementById("showFilters");
// const searchMobile = document.getElementById("searchMobile");
// //const parentOfNodes = document.getElementById("parentOfNodes");

// const makeDiv = (array) => {
//     if (document.querySelector(".margin-top_grow-pill")) {
//         document.querySelector(".margin-top_grow-pill").remove();
//     }
//     let listPill = document.createElement('div');
//     listPill.classList.add('d-flex', 'w-100', "margin-top_grow-pill");
//     for (let i = 0; i < array.length; i++) {

//         const item = document.createElement('div');
//         const cross = document.createElement('i')
//         cross.classList.add('fa', 'fa-times');
//         item.classList.add('container_pill', 'b_blue4', 'montserrat-sb', 'color-darkish-blue');
//         cross.setAttribute("id", `${i}`);
//         item.appendChild(document.createTextNode(array[i]));

//         item.appendChild(cross);
//         if (array[i] !== 0) {
//             listPill.appendChild(item);
//         }

//         cross.addEventListener("click", () => {
//             array[cross.id] = 0;
//             item.remove()
//         })

//     }
//     return listPill;
// };
// btnFilterDesktop.addEventListener("click", () => {

//     if (hideCaptionFiltered) {
//         // parentOfNodes.removeChild(hideCaptionFiltered);
//         searchMobile.remove();
//         hideCaptionFiltered.remove();
//     }
//     showFilters.appendChild(makeDiv(arrOfCategory));

// });