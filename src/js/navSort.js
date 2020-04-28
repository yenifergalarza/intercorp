const fathermobile = document.getElementById("parentOfNodes");
const navDesktop = document.getElementById("navSortDesktop");
const mobileDesktop = document.getElementById("searchMobile");
const fatherDesktop = document.getElementById("allContainer")
const nav = document.createElement("nav");
nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-white", "header_growth", "sidenav_desktop", "col-lg-3");
nav.innerHTML = `<div class="w-100">
<div class="d-flex justify-content-between w-100">
<p class="navbar-brand montserrat-r text-one_filter "><i class="fa fa-filter"></i> Ver Filtros
</p>
<button class="navbar-toggler border-0 p-0 " type="button" data-toggle="collapse" data-target="#navbarNavDropdown01" aria-controls="navbarNavDropdown01" aria-expanded="false" aria-label="Toggle navigation">

    <i class="fa fa-angle-right arrow-mob_pink"></i>
</button></div>
<div class="collapse navbar-collapse w-100_desktop" id="navbarNavDropdown01">
    <form class=" mt-4  w-100_desktop">
        <div class="none_mobile-b w-100">
            <p class="montserrat-b ">¿Qué tipo de Reto Profesional te interesa?</p>
            <div class="pb-3  container_search d-flex">
                <div class="w-100 ps-rel">
                    <i class="fa fa-search container_search_icon text-muted"></i>
                    <input type="text" class="form-control form-control_search montserrat-r" placeholder="Palabra clave" aria-label="Username">
                </div>
                <button type="button" class="w-100 container_pill roundBorder_b color-darkish-blue align-self-end   roundBorder  montserrat-sb  hoverPulse">Explora</button>
            </div>
        </div>

        <p class="montserrat-b ">Explora los retos profesionales por:</p>

        <select id="select1" class="border-select  montserrat-r selectpicker" data-selected-text-format="count" data-width="100%" data-size="4" data-live-search="true" data-actions-box="true" multiple title="Nuestras Empresas">
            <option class="o1">Interbank</option>
            <option class="o1">Intelligo</option>
            <option class="o1">Interfondos</option>
            <option class="o1">Interseguros</option>
            <option class="o1">ExpressNet</option>
            <option class="o1"> Indigital</option>
            <option class="o1">Supermercados Peruanos</option>
            <option class="o1">Promart</option>
            <option class="o1">Oechsle</option>
            <option class="o1">Financiera Oh!</option>
            <option class="o1">Real Plaza</option>
            <option class="o1">Innova Schools Perú</option>
            <option class="o1">Innova Schools México</option>
            <option class="o1">Innova Teaching School</option>
            <option class="o1">UTP</option>
            <option class="o1">Zegel IPAE</option>
            <option class="o1">IDAT</option>
            <option class="o1">Corriente Alterna</option>
            <option class="o1">Colectivo 23</option>
            <option>Quicorp</option>
            <option>Quifatex</option>
            <option>Farmacias Peruanas</option>
            <option>Aviva</option>
            <option>Intercorp Managment</option>
            <option>UCIC</option>
            <option>Casa Andina</option>
            <option>Cineplanet</option>
            <option>Intralot</option>
            <option>San Miguel Industria PET</option>
            <option>SINECA</option>
            <option>NG Restaurantes 3</option>
            <option>Perú Champs</option>
            <option>URBI</option>
            <option>La Victoria Lab</option>
            <option>Nexus Group</option>

        </select>


        <select id="select2" class=" border-select selectpicker  montserrat-r" data-selected-text-format="count" data-width="100%" data-size="3" data-live-search="true" data-actions-box="true" multiple title="Nuestras Áreas de Trabajo">
            <option>Aduanas y Comercio Exterior</option>
            <option>Almacén </option>
            <option>Atención al Cliente</option>
            <option>Auditoria/Contraloría</option>
            <option>Call Center/Telemarketing</option>
            <option>Canales</option>
            <option>Centro de distribución </option>
            <option>Compras</option>
            <option>Comunicación</option>
            <option>Contabilidad</option>
            <option>CX / UX</option>
            <option>Data Analitycs</option>
            <option>Finanzas</option>
            <option>Ingeniería</option>
            <option>Innovación</option>
            <option>Inversiones</option>
            <option>Legal/Riesgos</option>
            <option>Logística / Cadena de
                suministro</option>
            <option>Mantenimiento /
                Limpieza</option>
            <option>Marketing</option>
            <option>Mejora Continua</option>
            <option>Operaciones</option>
            <option>Producción / Operación</option>
            <option>Proyectos</option>
            <option>Publicidad</option>
            <option>Recursos Humanos</option>
            <option>Relaciones
                Institucionales/ Públicas</option>
            <option>Senior Managment</option>
            <option>Secretarias Y Recepción</option>
            <option>Seguridad</option>
            <option>Sistemas y
                Telecomunicaciones</option>
            <option>Sostenibilidad / Medio
                Ambiente</option>
            <option>Tecnología</option>
            <option>Tesorería</option>
            <option>Trademarketing</option>
            <option>Transporte</option>
            <option>Ventas</option>
            <option>Otros</option>
        </select>

        <select id="select3" class=" border-select selectpicker show-tick  montserrat-r" data-width="100%" data-size="5" title="Experiencia mínima">
            <option>No se necesita experiencia previa</option>
            <option>1 año</option>
            <option>2 años </option>
            <option>3 años</option>
            <option> 4 años</option>
            <option>5 años </option>
            <option>Entre más de 5 años 10 años</option>
            <option>Más de 10 años </option>
        </select>

        <select id="select4" class=" border-select selectpicker show-tick  montserrat-r" data-width="100%" data-size="5" title="Modalidad de Trabajo">
            <option>Full Time</option>
            <option>Part time </option>
            <option>Temporal</option>
        </select>

        <div class="w-100  d-flex  flex-column">


            <button type="button" id="btnFilterDesktop" class=" w-100 container_pill roundBorder_b color-darkish-blue align-self-end mb-3   roundBorder  montserrat-sb hoverPulse ">Aplicar</button>
        </div>

        <div class="container-links text-center">
            <p class="montserrat-r mb-0 "><a class="color-darkish-blue"  href="#"><u class="color-darkish-blue">Política Crece con
                        Intercorp</u></a></p>
            <p class="montserrat-r mb-0 "><a class="color-darkish-blue" data-toggle="modal" data-target="#requirements"><u class="color-darkish-blue">Requisitos para
                        postular</u></a></p>
            <p class="montserrat-r mb-0 "><a class="color-darkish-blue" href="#"><u class="color-darkish-blue">Preguntas
                        Frecuentes</u></a>
            </p>


        </div>



    </form>



</div>

</div>`


if (window.innerWidth < 992) {
    fathermobile.insertBefore(nav, mobileDesktop);

} else {
    fatherDesktop.replaceChild(nav, navDesktop);
}

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


const btnFilterDesktop = document.getElementById("btnFilterDesktop");
const hideCaptionFiltered = document.getElementById("hideCaptionFiltered");
const showFilters = document.getElementById("showFilters");
const searchMobile = document.getElementById("searchMobile");


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
                let indexArrNum = i;
                for (let i = 0; i < indexArr.length; i++) {

                    const itemM = document.createElement('div');
                    console.log(i) //sub numero del array 
                    console.log(indexArrNum);
                    itemM.classList.add('container_pill', 'b_blue4', 'montserrat-sb', 'color-darkish-blue');
                    const crossM = document.createElement('i');
                    crossM.classList.add('fa', 'fa-times');
                    crossM.setAttribute("id", `${i}-i${indexArrNum}`);
                    itemM.appendChild(crossM);
                    itemM.appendChild(document.createTextNode(indexArr[i]));
                    listPill.appendChild(itemM);
                    crossM.addEventListener("click", () => {
                        indexArr.splice((indexArrNum), 1);
                        itemM.remove()
                        console.log(indexArr);
                        console.log(array);
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

        searchMobile.remove();
        hideCaptionFiltered.remove();
    }
    showFilters.appendChild(makeDiv(arrOfCategory));

});