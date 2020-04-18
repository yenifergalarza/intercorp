const Inputdni = document.getElementById("documentId");
const btnGetInto = document.getElementById("btn_send");
const popUp = document.getElementById("popUp");
const form = document.getElementById("form");

const modal = document.getElementById("exampleModalScrollable");


const verifying = (e) => {

    const valInput = Inputdni.value;
    console.log(valInput);
    if (document.getElementById("popUpContent") != null) {
        popUp.removeChild(document.getElementById("popUpContent"));
    }
    if (valInput == 12345678) {
        let popdiv = document.createElement('div');
        popdiv.classList.add('modal-content');
        popdiv.setAttribute("id", "popUpContent");
        popdiv.innerHTML = ``;
        const content = ` 
      <div class="modal-header justify-content-center" >
          <h5 class="modal-title text-center mobileTilePopUp" id="exampleModalScrollableTitle ">Ingresa el código enviado a tu mail y/o
        
         
          </h5>
          
      </div>
      <div class="modal-body">
    <h5 class="text-center mobileTilePopUp"> xxxxxxxxxx@intercorp.com.pe   
 </h5>
 <h5 class="text-center mobileTilePopUp ">   Xxx xxx 987</h5>
      <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1  montserrat-r" for="">Token : </label><input class="inputHeight montserrat-r" id="token" type="text"></div>
      </div>
      <div class="modal-footer">
          <button type="button" class="container_pill b_blue4 color-darkish-blue border-0 font-sz-1_1  montserrat-b " data-dismiss="modal" id="pass">Ingresar
          </button>
      </div>`
        popdiv.innerHTML = content;

        popUp.appendChild(popdiv);

        const passBtn = document.getElementById("pass");

        const token = document.getElementById("token");
        passBtn.addEventListener("click", () => {

            if (token.value == 1234) {
                location.href = "../somosIntercorp.html";
            }
        });

        document.addEventListener("keyup", (e) => {
            if (e.keycode == 13 || e.which == 13) {
                if (token.value == 1234) {
                    location.href = "../somosIntercorp.html";
                }
            }
        });


    } else {
        let popdiv = document.createElement('div');
        popdiv.classList.add('modal-content');
        popdiv.setAttribute("id", "popUpContent");
        popdiv.innerHTML = ``;
        const content = ` 
  <div class="modal-header  pd-mobile justify-content-center" >
      <h5 class="modal-title text-center mobileTilePopUp" id="exampleModalScrollableTitle">¡Hola! Por favor registra tus datos aquí:
      </h5> </div>

  <div class="modal-body pd-mobile">
  <div class="d-flex justify-content-between mobile-col"><label class="font-sz-1_1 montserrat-r" " for="">DNI : </label><input class="inputHeight montserrat-r" id="dni"  type="number"></div>
  <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1 montserrat-r" "  for="">Nombres : </label><input class="inputHeight montserrat-r"   id="name" type="text"></div>
  <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1  montserrat-r" " for="">Apellido : </label><input class="inputHeight montserrat-r"   id="lastName" type="text"></div>
  <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1  montserrat-r" " for="">Empresa : </label><input  class="inputHeight montserrat-r"  id="bussines" type="text"></div>
  <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1  montserrat-r" " for="">Correo : </label><input  class="inputHeight montserrat-r"  id="email" type="email"></div>
  <div class="d-flex justify-content-between  mobile-col"><label class="font-sz-1_1 montserrat-r"  for="">Celular : </label><input class="inputHeight montserrat-r"   id="phone" type="number"></div>
  </div>
  <div class="modal-footer pd-mobile">
      <button type="button" class="container_pill b_blue4 color-darkish-blue  montserrat-b border-0" data-dismiss="modal" id="getData">Enviar
      </button>
  </div> `
        popdiv.innerHTML = content;

        popUp.appendChild(popdiv);

        const btnSendData = document.getElementById("getData");
        btnSendData.addEventListener("click", () => {
            const dni = document.getElementById("dni").value;
            const name = document.getElementById("name").value;
            const lastName = document.getElementById("lastName").value;
            const bussines = document.getElementById("bussines").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            console.log(`${dni} ${name}  ${lastName} ${bussines} ${email}  ${phone}  `);

        })
    }
}



$(document).keypress(function(e) {
    if ((e.keycode == 13 || e.which == 13)) {
        event.preventDefault();
        verifying();

    }
});

btnGetInto.addEventListener("click",
    () => {
        verifying();
    })