const analyzer = {

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.trim().split(" ").length;

    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount = text.length;

    return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterCountExcludingSpaces = text.replace(/\s+/g, "").replace(/[^A-Za-z+\d+]/g, "").length;

    return characterCountExcludingSpaces;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ").length;
    const characters = text.replace(/\s+/g, "").length;
    //let averageWordLength=characterCount/WordCount;
    const averageWordLength = parseFloat((characters / words).toFixed(2));

    return averageWordLength;

  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.trim().split(" ");
    let numberCount = 0
    for (let i = 0; i < numbers.length; i++) {
      if (!isNaN(numbers[i])) {
        numberCount++
      }
    }
    // text.match(/\d+(\.\d+)?/g).length;
    //if (!isNaN (text) )
    return numberCount;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.trim().split(" ");
    let numberSum = 0
    for (let i = 0; i < numbers.length; i++) {
      if (!isNaN(numbers[i])) {
        numberSum += parseFloat(numbers[i])
      }
    }
    //const numbers=text.match(/\d+(\.\d+)?/g).length;
    //const numberSum=numbers.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    return numberSum
  },

};

export default analyzer;
