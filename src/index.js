import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea=document.querySelector("textarea[name='user-input']")

textarea.addEventListener("keyup",()=>{
  const wordCountResult = document.querySelector("li[data-testid='word-count']")
  
  const averageWordLengthResult = document.querySelector("li[data-testid='word-length-average']");
  const characterCountResult = document.querySelector("li[data-testid='character-count']");
  const characterCountExcludingSpacesResult = document.querySelector("li[data-testid='character-no-spaces-count']");
  const numberCountResult = document.querySelector("li[data-testid='number-count']");
  const numberSumResult = document.querySelector("li[data-testid='number-sum']");

  wordCountResult.innerHTML= "Palabras: " + analyzer.getWordCount(textarea.value);
  averageWordLengthResult.innerHTML = "Longitud media de palabras: " + analyzer.getAverageWordLength(textarea.value);
  characterCountResult.innerHTML = " Caracteres: " + analyzer.getCharacterCount(textarea.value);
  characterCountExcludingSpacesResult.innerHTML = "Caracteres excluyendo espacios y signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(textarea.value);
  numberCountResult.innerHTML = "Números:" + analyzer.getNumberCount(textarea.value);
  numberSumResult.innerHTML = "Suma de números:" + analyzer.getNumberSum(textarea.value);

  //botón reinicio
  const botonReiniciar=document.getElementById("reset-button")
  botonReiniciar.addEventListener('click', () => {
    textarea.value="";
    wordCountResult.textContent="Palabras: 0"
    averageWordLengthResult.textContent="Longitud media de palabras: 0"
    characterCountResult.textContent="Caracteres: 0"
    characterCountExcludingSpacesResult.textContent="Caracteres sin espacios ni signos de puntuación: 0"
    numberCountResult.textContent="Números: 0"
    numberSumResult.textContent="Suma de números: 0"
  })
  
})


