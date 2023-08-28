import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//de dónde voy a contar
const textarea=document.querySelector("textarea[name='user-input']")
textarea.addEventListener("keyup",()=>{
    const resultado=analyzer.getWordCount(textarea.value)
    console.log (resultado)

})
//Contar caracteres

//botón reinicio
const botonReiniciar=document.getElementById("reset-button")
botonReiniciar.addEventListener('click', reiniciar)
function reiniciar() {
    location.reload();
  
}