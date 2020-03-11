const Inputdni = document.getElementById("documentId");
const btnGetInto = document.getElementById("btn_send");
const popUp = document.getElementById("popUp");

btnGetInto.addEventListener("click", () => {
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
          <h5 class="modal-title text-center" id="exampleModalScrollableTitle">Ingresa el código enviado a tu mail y/o
        
         
          </h5>
          
      </div>
      <div class="modal-body">
    <h5 class="text-center"> xxxxxxxxxx@intercorp.com.pe   
 </h5>
 <h5 class="text-center">   Xxx xxx 987</h5>
      <div class="d-flex justify-content-between"><label for="">Token : </label><input id="token" type="text"></div>
      </div>
      <div class="modal-footer">
          <button type="button" class="container_pill b_blue4 color-darkish-blue border-0" data-dismiss="modal" id="pass">Ingresar
          </button>
      </div>`
        popdiv.innerHTML = content;

        popUp.appendChild(popdiv);

        const passBtn = document.getElementById("pass");


        passBtn.addEventListener("click", () => {
            const token = document.getElementById("token");

            if (token.value == 1234) {
                location.href = "../somosIntercorp.html";
            } else {

            }
        })


    } else {

        let popdiv = document.createElement('div');
        popdiv.classList.add('modal-content');
        popdiv.setAttribute("id", "popUpContent");
        popdiv.innerHTML = ``;
        const content = ` 
  <div class="modal-header  justify-content-center" >
      <h5 class="modal-title text-center" id="exampleModalScrollableTitle">¡Hola! Por favor registra tus datos aquí:
      </h5>
   
  </div>
  <div class="modal-body">
  <div class="d-flex justify-content-between"><label for="">DNI : </label><input  id="dni"  type="number"></div>
  <div class="d-flex justify-content-between"><label for="">Nombres : </label><input  id="name" type="text"></div>
  <div class="d-flex justify-content-between"><label for="">Apellido : </label><input  id="lastName" type="text"></div>
  <div class="d-flex justify-content-between"><label for="">Empresa : </label><input  id="bussines" type="text"></div>
  <div class="d-flex justify-content-between"><label for="">Correo : </label><input  id="email" type="email"></div>
  <div class="d-flex justify-content-between"><label for="">Celular : </label><input  id="phone" type="number"></div>
  </div>
  <div class="modal-footer">
      <button type="button" class="container_pill b_blue4 color-darkish-blue  border-0" data-dismiss="modal" id="getData">Enviar
      </button>
  </div>`
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
})