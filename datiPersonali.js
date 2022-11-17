import {controllodatoinserito} from "./datiAnagrafici.js"

let impiego = document.getElementById("impiego");
let statocivile = document.getElementById("statocivile");
let formDatiPersonalirisp = document.getElementById("formdatipersonalirisp");

const inserimentoDatiPersonali = document.getElementById("inseriscidatipersonali");
inserimentoDatiPersonali.addEventListener("click", inserisciDatiPerson , false);

inserimentoDatiPersonali.addEventListener("click", () => {if (formDatiPersonalirisp.style.display !== 'none') {
    
    formDatiPersonalirisp.style.display = 'block';
  } }, {once:true}
 );

function inserisciDatiPerson() {
    
    document.getElementById("impiegorisp").textContent = controllodatoinserito(
      impiego.value
    );
    document.getElementById("statocivilerisp").textContent = controllodatoinserito(
      statocivile.value
    );
}