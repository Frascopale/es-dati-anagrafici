let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let codicef = document.getElementById("codicef");
let datanascita = document.getElementById("datanascita");
let formDatiAnagraficirisp = document.getElementById("formdatirisp");

const inserimentoDati = document.getElementById("inseriscidatianagrafici");
inserimentoDati.addEventListener("click", inserisciDatiAnagr , false);

inserimentoDati.addEventListener("click", () => {if (formDatiAnagraficirisp.style.display !== 'none') {
    
    formDatiAnagraficirisp.style.display = 'block';
  } }, {once:true}
 );




function inserisciDatiAnagr() {

  document.getElementById("nomerisp").textContent = controllodatoinserito(
    nome.value
  );
  document.getElementById("cognomerisp").textContent = controllodatoinserito(
    cognome.value
  );
  document.getElementById("codicefrisp").textContent = controllodatoinserito(
    codicef.value
  );
  document.getElementById("datanascitarisp").textContent =
    controllodatoinserito(convertireData(datanascita.value));
}

export function controllodatoinserito(dato) {
  if (dato == "") {
    return "Dato non inserito";
  } else {
    return dato;
  }
}

function convertireData(data) {
    let d = data.split("-");
    let dat = (d[2] + '/' + d[1] + '/' + d[0]);
    return dat;     
}