import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea=document.querySelector("textarea[name='user-input']")

textarea.addEventListener("keyup",()=>{
  const wordCountResult = document.getElementById("word-count");
  wordCountResult.innerHTML = analyzer.getWordCount(textarea.value);
    
  const averageWordLengthResult = document.getElementById("word-length-average");
  averageWordLengthResult.innerHTML = analyzer.getAverageWordLength(textarea.value);

  const characterCountResult = document.getElementById("character-count");
  characterCountResult.innerHTML = analyzer.getCharacterCount(textarea.value);
   
  const characterCountExcludingSpacesResult = document.getElementById("character-no-spaces-count");
  characterCountExcludingSpacesResult.innerHTML = analyzer.getCharacterCountExcludingSpaces(textarea.value);

  const numberCountResult = document.getElementById("number-count");
  numberCountResult.innerHTML = analyzer.getNumberCount(textarea.value);
    
  const numberSumResult = document.getElementById("number-sum");
  numberSumResult.innerHTML = analyzer.getNumberSum(textarea.value);

  //botón reinicio
  const botonReiniciar=document.getElementById("reset-button")
  botonReiniciar.addEventListener('click', () => {
    textarea.value="";
    wordCountResult.textContent="0"
    averageWordLengthResult.textContent="0"
    characterCountResult.textContent="0"
    characterCountExcludingSpacesResult.textContent="0"
    numberCountResult.textContent="0"
    numberSumResult.textContent="0"
  })
  
})


