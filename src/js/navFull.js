const btnBlue = document.getElementById("btn-menu_blue");
const bodyContent = document.querySelectorAll(".grow_content-noMainNav");



btnBlue.addEventListener("click", () => {

    bodyContent.forEach(element => {
        element.classList.toggle("d-none");
    });

})