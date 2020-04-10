const arrOfCategory = [0, 0, 0, 0];
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const select4 = document.getElementById("select4");

const selectedMultiple = (select, numero) => {
    select.addEventListener("change", (e) => {
        let opts = [];
        for (let i = 0, len = e.target.options.length; i < len; i++) {
            opt = e.target.options[i];

            if (opt.selected) {

                opts.push(opt.text);
                //       opts.push(opt);
            }
        }
        console.log(opts);
        arrOfCategory.splice(numero, 1, opts);
        return arrOfCategory;
    });


}
const selectUnique = (select, numero) => {
    select.addEventListener("change", (e) => {
        console.log(e.target.options[e.target.selectedIndex].text)

        let selected = e.target.options[e.target.selectedIndex].text;
        arrOfCategory.splice(numero, 1, selected);
        return arrOfCategory;
    })
}

selectedMultiple(select1, 0);
selectedMultiple(select2, 1);
selectUnique(select3, 2);
selectUnique(select4, 3);

//selectedNumero.addEventListener("click", () => {
//         selectedNumero.classList.toggle("active");
//     });


const btnFilterDesktop = document.getElementById("btnFilterDesktop");
const hideCaptionFiltered = document.getElementById("hideCaptionFiltered");
const showFilters = document.getElementById("showFilters");
const searchMobile = document.getElementById("searchMobile");
//const parentOfNodes = document.getElementById("parentOfNodes");

const makeDiv = (array) => {
    if (document.querySelector(".margin-top_grow-pill")) {
        document.querySelector(".margin-top_grow-pill").remove();
    }
    let listPill = document.createElement('div');
    listPill.classList.add('d-flex', 'w-100', "margin-top_grow-pill");
    for (let i = 0; i < array.length; i++) {

        const item = document.createElement('div');
        const cross = document.createElement('i');
        cross.classList.add('fa', 'fa-times');
        item.classList.add('container_pill', 'b_blue4', 'montserrat-sb', 'color-darkish-blue');
        cross.setAttribute("id", `${i}`);


        item.appendChild(cross);

        let indexArr = array[i];
        if (indexArr !== 0 && typeof indexArr === 'string') {
            item.appendChild(document.createTextNode(indexArr));
            listPill.appendChild(item);


        } else {
            if (typeof indexArr === 'object') {
                let indexArrNum = indexArr.indexOf(i);
                for (let i = 0; i < indexArr.length; i++) {
                    const itemM = document.createElement('div');


                    itemM.classList.add('container_pill', 'b_blue4', 'montserrat-sb', 'color-darkish-blue');
                    const crossM = document.createElement('i');
                    crossM.classList.add('fa', 'fa-times');
                    crossM.setAttribute("id", `${i}-i${indexArrNum}`);
                    itemM.appendChild(crossM);
                    itemM.appendChild(document.createTextNode(indexArr[i]));
                    listPill.appendChild(itemM);
                    crossM.addEventListener("click", () => {
                        console.log(indexArrNum);
                        indexArr[indexArrNum].i = 0;
                        itemM.remove()
                    })


                }

            }
        }


        cross.addEventListener("click", () => {
            array[cross.id] = 0;
            item.remove()
        })

    }
    return listPill;
};
btnFilterDesktop.addEventListener("click", () => {

    if (hideCaptionFiltered) {
        // parentOfNodes.removeChild(hideCaptionFiltered);
        searchMobile.remove();
        hideCaptionFiltered.remove();
    }
    showFilters.appendChild(makeDiv(arrOfCategory));

});