// 1) На странице сделать поле ввода текста (textarea), а также кнопку Go. В поле вводим любой произвольный текст, разделенный пробелами. При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста. 
// 2) Найти самое длинное слово, вывести его в консоль. 
// 3) С помощью имеющихся слов создать предложение ровно в 30 символов.

// 1. Создать в HTML input, button и div для input
// 2. Разделить экран на 2 части  
// 3. Получить input и button и div для input
// 4. Получить текст с инпута 
//    Получить массив с текста
// 5. Создать пустую переменную
// 6. Сделать цикл с переменной которая будет аккумулировать HTML 
//    пустых инпутов
// 7. Интерполяция - вивести HTML input и вложить туда текст из масива
// 8. Результат записать в HTML
// 9. Вывести в HTML

const input = document.querySelector('.textarea');
// console.log(input);
const btn = document.querySelector('.button');
// console.log(btn);
const box = document.querySelector('.box');
// console.log(box);

btn.addEventListener('click', () => {
  const text = document.querySelector('.textarea')
  const textArr = text.value.split(' ');
  // console.log(textArr);
  let tempStr = '';
  for (let i = 0; i < textArr.length; i++) {
    // console.log(textArr[i]);
    // console.log(text.value);
    tempStr = `
      ${tempStr}
        <input class="textarea" type="text" value="${textArr[i]}">
    `;
  }
 
  box.innerHTML = tempStr;

  let longWord = 0;  // Второе задание
  textArr.sort((a, b) => b.length - a.length);
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i].length > longWord) {  // Второе задание
      longWord = textArr[i];   // Второе задание
    }
    // console.log(tempSort);
    console.log(`Cамое длинное слово в Массиве - ${longWord}`)  // Второе задание
    
  }

  let testOffer = textArr.join(' '); // Начало третего задания
  // console.log(testOffer);

  if (testOffer.length === 30) {
    console.log(`Символов в массиве = 30: ${testOffer}`)
  }

  if (testOffer.length > 30) {
    testOffer = testOffer.slice(0, 30)
    console.log(`Символов в массиве > 30 - Лишнее отрежим: ${testOffer}`)
  }

  if (testOffer.length < 30) {
    while (testOffer.length < 30) {
      testOffer += testOffer;
    }
    testOffer = testOffer.slice(0, 30);
    console.log(`Символов в массиве < 30 - Нужно добавить: ${testOffer}`); // Конец третего задания
  }
});



