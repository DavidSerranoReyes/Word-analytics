const textareaEl = document.querySelector('textarea');
const characterNumberEl = document.querySelector('.stat__number--characters');
const tiktokNumberEl = document.querySelector('.stat__number--tiktok');
const instagramNumberEl = document.querySelector('.stat__number--instagram');
const wordsNumberEl = document.querySelector('.stat__number--words');

const tiktokCharactersLimit = tiktokNumberEl.textContent;
console.log(tiktokCharactersLimit);
const instagramCharactersLimit = instagramNumberEl.textContent;

textareaEl.addEventListener('input', function () {
  //example of simple validation

  if (textareaEl.value.includes('<script>')) {
    alert('You cannot use <script> in your text');
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }

  //determine new numbers;
  let words = textareaEl.value.replaceAll('\n', ' ').trim().split(' ');

  if (words.length === 1 && words.includes('')) {
    words = [];
  }
  let numberOfWords = words.length;
  console.log(words);

  const numberOfCharacters = textareaEl.value.length;
  const tiktokCharactersLeft = tiktokCharactersLimit - numberOfCharacters;
  const instagramCharactersLeft = instagramCharactersLimit - numberOfCharacters;

  //add visual indicator if limit is exceeded
  if (tiktokCharactersLeft < 0) {
    tiktokNumberEl.classList.add('stat__number--limit');
  } else {
    tiktokNumberEl.classList.remove('stat__number--limit');
  }

  if (instagramCharactersLeft < 0) {
    instagramNumberEl.classList.add('stat__number--limit');
  } else {
    instagramNumberEl.classList.remove('stat__number--limit');

    //set new numbers

    wordsNumberEl.textContent = numberOfWords;
    characterNumberEl.textContent = numberOfCharacters;
    tiktokNumberEl.textContent = tiktokCharactersLeft;
    instagramNumberEl.textContent = instagramCharactersLeft;
  }
});

//deber
// crear un github repository y pushear proyect
//crear un readme con gif de un scream recorder (aun no)
//remove remaining
//crear funcion que calcule words (stringToWords)  argumento (string) retorna un array de strings
//funtion stringToWords (string)
//incluir dentro de la funcion el if statement (words.lenght ==)
//anadir get line counting (contador para lineas, duplicar caracteres) ahora solo2 caracteres
