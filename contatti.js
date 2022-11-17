import {controllodatoinserito} from "./datiAnagrafici.js"

let numerotell = document.getElementById("numerotell");
let email = document.getElementById("email");
let indirizzo = document.getElementById("indirizzo");
let formContattirisp = document.getElementById("formcontattirisp");

const inserimentoContatti = document.getElementById("inseriscicontatti");
inserimentoContatti.addEventListener("click", inserisciContat , false);
inserimentoContatti.addEventListener("click", () => {if (formContattirisp.style.display !== 'none') {
    
    formContattirisp.style.display = 'block';
  } }, {once:true}
 );

function inserisciContat() {
  
  document.getElementById("numerotellrisp").textContent = controllodatoinserito(numerotell.value);
  document.getElementById("emailrisp").textContent = controllodatoinserito(controlloemail(email.value));
  console.log(email.value)
  document.getElementById("indirizzorisp").textContent = controllodatoinserito(indirizzo.value);
}

function controlloemail(email){
    if (email.includes("@")) {
        return email;
      } else {
        return "E-mail non valido"
      }
    
}

