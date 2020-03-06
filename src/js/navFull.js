const btn_blue = document.getElementById("btn-menu_blue");
const bodyContent = document.querySelectorAll(".grow_content-noMainNav");



btn_blue.addEventListener("click", () => {

    bodyContent.forEach(element => {
        element.classList.toggle("d-none");
    });

})