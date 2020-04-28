const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
];
const today = new Date();
const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

//pagina 1
const values = ["", "", "", "", "", "", "", "", "", "", ""]; //donde se almacena la info del usario
const popUp = document.getElementById("contentAplicant");
const popdiv = document.createElement('div');
popdiv.classList.add('modal-content');
popdiv.setAttribute("id", "popUpContent");
popdiv.innerHTML = ``;
const content = `
<div class="modal-header  pd-mobile justify-content-center border-0 ">
    <h5 class="modal-title text-center mobileTilePopUp montserrat-b color-darkish-blue"
        id="exampleModalScrollableTitle">
        Datos del Postulante
    </h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true ">×</span>
    </button>
</div>
<form action="" id="form1" class="">
    <div class="modal-body pd-mobile">

        <div class="d-flex justify-content-between mobile-col input-group ">
            <label class="font-sz-1_1 montserrat-r " for="name">Nombres : </label>
            <input class="desktop-w50 inputHeight montserrat-r" pattern="([^\s][A-zÀ-ž\s]+){2,}"
                title="ingresa tus nombres y apellidos completos" required id="name" type="text">
        </div>
        <div class="d-flex justify-content-between mobile-col">
            <label class="font-sz-1_1 montserrat-r" for="doc">Documento: </label>
            <div class="d-flex desktop-w50">


                <select id="docType" required
                    class=" inputHeight font-sz-1_1 pl-0 montserrat-r montserrat-r selectpicker pl-0 pt-0 pb-0"
                    data-selected-text-format="count" data-size="5" data-actions-box="true" title="Doc">
                    <option class="font-sz-1_1">DNI</option>
                    <option class="font-sz-1_1">CE</option>
                </select>
                <input type="number" class="inputHeight montserrat-r form-control" pattern="([-+]?[0-9]*[.,]?[0-9]+){8}"
                    title="ingresa un número de documento valido" id="doc" required />

            </div>
        </div>
        <div class="d-flex justify-content-between  input-group mobile-col">
            <label class="font-sz-1_1  montserrat-r" for="nacionality">Nacionalidad: </label>
            <input class="desktop-w50 inputHeight montserrat-r " id="nacionality" pattern="([^\s][A-zÀ-ž\s]+){2,}"
                title="ingresa tu nacionalidad correctamente" required type="text ">
        </div>
        <hr>
        <div class="d-flex justify-content-between mobile-col ">
            <label class="font-sz-1_1 montserrat-r " for="bussiness">Empresa Actual : </label>
            <select id="bussiness" required
                class="desktop-w50 inputHeight font-sz-1_1 montserrat-r montserrat-r selectpicker pl-0 pt-0 pb-0"
                data-selected-text-format="count" data-size="5" data-live-search="true" data-actions-box="true"
                title=" Empresas">
                <option class="font-sz-1_1">Interbank</option>
                <option class="font-sz-1_1">Intelligo</option>
                <option class="font-sz-1_1">Interfondos</option>
                <option class="font-sz-1_1">Interseguros</option>
                <option class="font-sz-1_1">ExpressNet</option>
                <option class="font-sz-1_1"> Indigital</option>
                <option class="font-sz-1_1">Supermercados Peruanos</option>
                <option class="font-sz-1_1">Promart</option>
                <option class="font-sz-1_1">Oechsle</option>
                <option class="font-sz-1_1">Financiera Oh!</option>
                <option class="font-sz-1_1">Real Plaza</option>
                <option class="font-sz-1_1">Innova Schools Perú</option>
                <option class="font-sz-1_1">Innova Schools México</option>
                <option class="font-sz-1_1">Innova Teaching School</option>
                <option class="font-sz-1_1">UTP</option>
                <option class="font-sz-1_1">Zegel IPAE</option>
                <option class="font-sz-1_1">IDAT</option>
                <option class="font-sz-1_1">Corriente Alterna</option>
                <option class="font-sz-1_1">Colectivo 23</option>
                <option class="font-sz-1_1">Quicorp</option>
                <option class="font-sz-1_1">Quifatex</option>
                <option class="font-sz-1_1">Farmacias Peruanas</option>
                <option class="font-sz-1_1">Aviva</option>
                <option class="font-sz-1_1">Intercorp Managment</option>
                <option class="font-sz-1_1">UCIC</option>
                <option class="font-sz-1_1">Casa Andina</option>
                <option class="font-sz-1_1">Cineplanet</option>
                <option class="font-sz-1_1">Intralot</option>
                <option class="font-sz-1_1">San Miguel Industria PET</option>
                <option class="font-sz-1_1">SINECA</option>
                <option class="font-sz-1_1">NG Restaurantes 3</option>
                <option class="font-sz-1_1">Perú Champs</option>
                <option class="font-sz-1_1">URBI</option>
                <option class="font-sz-1_1">La Victoria Lab</option>
                <option class="font-sz-1_1">Nexus Group</option>

            </select>
        </div>
        <div class="d-flex justify-content-between mobile-col ">
            <label class="font-sz-1_1 montserrat-r " for="area">Área Actual : </label>
            <input class="desktop-w50 inputHeight montserrat-r " pattern="([^\s][A-zÀ-ž\s]+){1,}"
                title="ingresa tu área actual correctamente" id="area" required type="text">
        </div>
        <div class="d-flex justify-content-between mobile-col ">
            <label class="font-sz-1_1 montserrat-r " for="job">Puesto Actual : </label>
            <input class="desktop-w50 inputHeight montserrat-r" pattern="([^\s][A-zÀ-ž\s]+){1,}"
                title="ingresa tu puesto actual correctamente" id="job" required type="text">
        </div>
        <div class="d-flex justify-content-between mobile-col ">
            <label class="font-sz-1_1 montserrat-r " for="jobBoss">Jefe Actual : </label>
            <input class="desktop-w50 inputHeight montserrat-r" pattern="([^\s][A-zÀ-ž\s]+){2,}" id="jobBoss" required
                type="text">
        </div>
        <div class="d-flex justify-content-between  mobile-col">
            <label class="font-sz-1_1  montserrat-r" for="jobBossPosition">Puesto Actual del jefe
                :</label>
            <input class="desktop-w50 inputHeight montserrat-r " pattern="([^\s][A-zÀ-ž\s]+){1,}" id="jobBossPosition"
                required type="text ">
        </div>
        <div class="d-flex justify-content-between mobile-col ">
            <label class="font-sz-1_1 montserrat-r " for="latestSalary">Ultimo salario : </label>
            <div class="d-flex desktop-w50">
                <select id="currencyType" required
                    class=" inputHeight font-sz-1_1 montserrat-r montserrat-r selectpicker pl-0 pt-0 pb-0"
                    data-selected-text-format="count" data-size="5" data-actions-box="true" title="Moneda">
                    <option class="font-sz-1_1">S/.</option>
                    <option class="font-sz-1_1">$</option>
                </select>

                <input class="inputHeight montserrat-r form-control" id="latestSalary" required type="number ">
            </div>
        </div>
    </div>
    <div class="modal-footer pd-mobile ">
        <button type="submit" class="container_pill b_blue4 color-darkish-blue montserrat-b border-0"
            id="getData">Siguiente<i class="fa fa-arrow-right"></i>
        </button>
    </div>
</form>`;
popdiv.innerHTML = content;
//pagina 1
// pagina2
let popdiv2 = document.createElement('div');
popdiv2.classList.add('modal-content');
popdiv2.setAttribute("id", "popUpContent2");
popdiv2.innerHTML = ``;
const content2 = `
<div class="modal-header  pd-mobile justify-content-center border-0 ">
    <h5 class="modal-title text-center mobileTilePopUp montserrat-b color-darkish-blue"
        id="exampleModalScrollableTitle">
        Requisitos para postular
    </h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true ">×</span>
    </button>
</div>
<form class="was-validated" id="form2">
    <div class="modal-body pd-mobile">
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="Validation1" required>
            <label class="custom-control-label font-sz-1_1" for="Validation1">Tener como mínimo 01 año laborando en
                alguna de las empresas del Grupo, en una misma posición. Para caso de prácticas pre o profesionales debe
                de tener un mínimo de 6 meses en su práctica actual.
            </label>

        </div>
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="Validation2" required>
            <label class="custom-control-label font-sz-1_1" for="Validation2">
                Tener un desempeño igual o superior a la calificacion <span
                    class="montserrat-sb font-sz-1_1">"bueno"</span> en su última evaluación del desempeño.
            </label>

        </div>
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="Validation3" required>
            <label class="custom-control-label font-sz-1_1" for="Validation3">No tener sanciones disciplinarias
                (memorándums, amonestaciones escritas, suspenciones, etc.) en el último año.
            </label>

        </div>
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input " id="Validation4" required>
            <label class="custom-control-label font-sz-1_1" for="Validation4">Cumplir cabalmente con el perfil del
                puesto publicado en Somos Intercorp-Crece.
            </label>

        </div>
        <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input" id="Validation5" required>
            <label class="custom-control-label font-sz-1_1" for="Validation5">Informar a su Jefe/Supervisor inmediato de
                su interés por participar en la convocatoria, antes de remitir su CV.
            </label>

        </div>
    </div>
    <div class="modal-footer pd-mobile d-flex  justify-content-between ">
        <button type="button" class="container_pill bg-gray_pill  montserrat-b border-0" id="backward2"> <i
                class="fa fa-arrow-left"></i>Regresar
        </button>
        <button type="submit" class="container_pill b_blue4 color-darkish-blue montserrat-b border-0 hoverPulse"
            id="forward2">Acepto
        </button>
    </div>

</form>`;

popdiv2.innerHTML = content2; //pagina 2
popUp.appendChild(popdiv);
const form1 = document.getElementById("form1");
const btnGetInto = document.getElementById("getData");

const page1 = () => {
    //pagina 1

    popUp.appendChild(popdiv);
    return popdiv
};

const page2 = () => {
    //pagina 2
    popUp.appendChild(popdiv2);
    return popdiv2
};


form1.addEventListener("submit", (e) => {
    e.preventDefault();
    const InputName = document.getElementById("name");
    const Inputdoc = document.getElementById("doc");
    const InputdocType = document.getElementById("docType");
    const InputNacionality = document.getElementById("nacionality");
    const InputBussiness = document.getElementById("bussiness");
    const InputArea = document.getElementById("area");
    const InputJob = document.getElementById("job");
    const InputJobBoss = document.getElementById("jobBoss");
    const inputPositionBoss = document.getElementById("jobBossPosition");
    const inputsalary = document.getElementById("latestSalary");
    const currency = document.getElementById("currencyType");
    let currencyTypeVal = currency.options[currency.selectedIndex].text;
    let InputdocTypeVal = InputdocType.options[InputdocType.selectedIndex].text;
    let InputBussinessVal = InputBussiness.options[InputBussiness.selectedIndex].text;
    values[0] = InputName.value;
    values[1] = Inputdoc.value;
    values[2] = InputdocTypeVal;
    values[3] = InputNacionality.value;
    values[4] = InputBussinessVal;
    values[5] = InputArea.value;
    values[6] = InputJob.value;
    values[7] = InputJobBoss.value;
    values[8] = inputPositionBoss.value;
    values[9] = Number(inputsalary.value);
    values[10] = currencyTypeVal;

    if (values[1].toString().length != 8) {
        Inputdoc.focus();
        return false
    }
    //pagina 3
    let popdiv3 = document.createElement('form');
    popdiv3.classList.add('modal-content');
    popdiv3.setAttribute("id", "popUpContent3");
    popdiv3.innerHTML = ``;
    const content3 = `
<div class="modal-header  pd-mobile  border-0 ">
    <h5 class="modal-title text-center mobileTilePopUp montserrat-b color-darkish-blue"
        id="exampleModalScrollableTitle">
        DECLARACION JURADA DEL POSTULANTE
    </h5>
    <div class="d-flex"><button type="button " class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true ">×</span>
        </button>
        <button type="button" class="close" id="btnPrint">
            <i class="fa fa-print"></i>
        </button>
    </div>
</div>
<div class="modal-body pd-mobile" id="printPage3">


    <p class="montserrat-r font-sz-1_1">
        Yo,<span class="montserrat-sb font-sz-1_1">${values[0].toUpperCase()}</span> de Nacionalidad <span
            class="montserrat-sb font-sz-1_1">${values[3].toUpperCase()}</span> con documento de identidad <span
            class="montserrat-sb font-sz-1_1"> ${values[2].toUpperCase()} </span> N° <span
            class="montserrat-sb font-sz-1_1">${values[1]}</span> Que actualmente cubro el puesto de <span
            class="montserrat-sb font-sz-1_1"> ${values[6].toUpperCase()}</span> en el área <span
            class="montserrat-sb font-sz-1_1"> ${values[5].toUpperCase()}</span> de la empresa <span
            class="montserrat-sb font-sz-1_1"> ${values[4].toUpperCase()} </span>Teniendo como Jefe/Gerente directo a
        <span class="montserrat-sb font-sz-1_1">${values[7].toUpperCase()}</span> con cargo <span
            class="montserrat-sb font-sz-1_1">${values[8].toUpperCase()}</span>
    </p>
    <p class="montserrat-r font-sz-1_1">Declaro bajo juramento que: </p>
    <ol style="list-style-type: lower-alpha;">
        <li class="montserrat-r font-sz-1_1">Cumplo con el tiempo de permanencia de 1 año en mi posicion actual en el
            Grupo.</li>
        <li class="montserrat-r font-sz-1_1">Presento un desempeño igual o superior a la calificación "bueno"en mi
            ultima evaluación.</li>
        <li class="montserrat-r font-sz-1_1">No presento sanciones disciplinarias( memorándums, amonestaciones escritas,
            suspensiones, etc) en el último año.</li>
        <li class="montserrat-r font-sz-1_1">No excedo el número de postulaciones permitidas (máximo 2 postulaciones en
            el periodo de un año).</li>
        <li class="montserrat-r font-sz-1_1">Cumplo con el perfil del puesto publicado en Crece con Intercorp.</li>
        <li class="montserrat-r font-sz-1_1">Informar a su Jefe/Supervisor inmediato de su interés por participar en la
            convocatoria, antes de remitir su CV.</li>
        <li class="montserrat-r font-sz-1_1">Mi último salario corresponde al monto de: <span
                class="montserrat-sb font-sz-1_1">${values[10]}${String(values[9])}</span>.</li>
    </ol>
    <p class="montserrat-r font-sz-1_1">Me afirmo y me ratifico en lo expresado, en señal de lo cual firmo el presente
        documento el dia ${day} de ${month} del año ${year}
    </p>
</div>
<div class="modal-footer pd-mobile d-flex  justify-content-sm-between  justify-content-lg-end ">
    <button type="button" class="container_pill bg-gray_pill  montserrat-b border-0 font-sz-1_1" id="backward3">
        <i class="fa fa-arrow-left"></i> Regresar
    </button>
    <button type="submit" class="font-sz-1_1 container_pill b_blue4 color-darkish-blue montserrat-b border-0 hoverPulse"
        id="forward3">Postular
    </button>
</div> `;
    //pagina 3

    const page3 = () => {

        popUp.appendChild(popdiv3);
        return popdiv3

    }
    popdiv3.innerHTML = content3;
    const antPage = document.getElementById("popUpContent");
    popUp.removeChild(antPage);
    page2();
    const atras2 = document.getElementById("backward2");
    const form2 = document.getElementById("form2");

    form2.addEventListener("submit", (e) => {

        e.preventDefault();
        const antPage2 = document.getElementById("popUpContent2");
        popUp.removeChild(antPage2);
        page3();

        const atras3 = document.getElementById("backward3");
        const form3 = document.getElementById("popUpContent3");
        const adelante3 = document.getElementById("forward3");

        form3.addEventListener("submit", (e) => {
            e.preventDefault();

            //funcion respectiva cuando se envie el form!!

            alert("gracias por registrarse"); //
            adelante3.setAttribute("disabled", "disabled");
        })
        atras3.addEventListener("click", () => {

            popUp.removeChild(form3);
            page2();

        })

        function ClickPrint() {
            const pdf = new jsPDF();

            const text1 = `Yo,${values[0].toUpperCase()} de Nacionalidad ${values[3].toUpperCase()} con documento de identidad  ${values[2].toUpperCase()}  N° ${values[1]} Que actualmente cubro el puesto de  ${values[6].toUpperCase()} en el área ${values[5].toUpperCase()} de la empresa ${values[4].toUpperCase()} Teniendo como Jefe/Gerente directo a ${values[7].toUpperCase()} con cargo ${values[8].toUpperCase()}`;
            const li1 = `1.  Cumplo con el tiempo de permanencia de 1 año en mi posicion actual en el Grupo.`;
            const li2 = `2.  Presento un desempeño igual o superior a la calificación "bueno"en mi ultima evaluación.`;
            const li3 = `3.  No presento sanciones disciplinarias( memorándums, amonestaciones escritas,suspensiones, etc) en el último año.`;
            const li4 = `4.  No excedo el número de postulaciones permitidas (máximo 2 postulaciones en el periodo de un año).`;
            const li5 = `5.  Cumplo con el perfil del puesto publicado en Crece con Intercorp.`;
            const li6 = `6.  Informar a su Jefe/Supervisor inmediato de su interés por participar en la convocatoria, antes de remitir su CV.`;
            const li7 = `7.  Mi último salario corresponde al monto de:${values[10]}${String(values[9])}.`;
            const finalText = `Me afirmo y me ratifico en lo expresado, en señal de lo cual firmo el presente documento el dia ${day} de ${month} del año ${year}`;
            const titlePdf = `DECLARACION JURADA DE POSTULANTE`;
            var titlePdf1 = pdf.splitTextToSize(titlePdf, 264);
            const arrText = [li1, li2, li3, li4, li5, li6, li7];

            var text2 = pdf.splitTextToSize(text1, 264);
            var text3 = pdf.splitTextToSize(finalText, 264);
            var splitTitle = pdf.splitTextToSize(arrText, 240);
            console.log(splitTitle);
            var pageHeight = pdf.internal.pageSize.height;
            pdf.setFontType("normal");
            pdf.setFontSize("11");
            let y = 40;
            const wrappedText = (textToWrap, initial, justify) => {
                for (var i = initial; i < textToWrap.length; i++) {
                    if (y > 280) {
                        y = 10;
                        pdf.addPage();

                    }
                    pdf.text(justify, y, textToWrap[i]);

                    y = y + 7;
                }
            }

            wrappedText(titlePdf1, 0, 15);
            y = 60;
            wrappedText(text2, 0, 15);
            wrappedText(splitTitle, 0, 25);
            wrappedText(text3, 0, 15);


            pdf.save('Declaracion-jurada.pdf');
        };

        const btnPrint = document.getElementById("btnPrint");
        btnPrint.addEventListener("click", () => {
            ClickPrint()
        });

        //btn pagina 3 postular


    })

    atras2.addEventListener("click", () => {
        const antPage2 = document.getElementById("popUpContent2");
        popUp.removeChild(antPage2);
        page1();
    })

})