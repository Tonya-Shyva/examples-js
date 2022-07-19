// ------РАННЄ ПОВЕРНЕННЯ------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// console.log(checkAge(20));
// -----------------------------------------------------

// ---ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)---!!!!!!!!!
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));
// --------------------------------------------------

// ------ЗАДАЧА: СКЛАД ТОВАРІВ 3.0----!!!!!!!!!!!!!!!!!
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ----------------------------------------------

// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('Не чётное: ', i);
//     continue;
//   }

//   console.log('чётное: ', i);
//   total += i;
// }

// console.log('total: ', total);

// -----МАСИВ------11111111111111111111111
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
// ----------------------------------------------

// ----------ДОСТУП ДО ЕЛЕМЕНТІВ ЗА ІНДЕКСОМ---!!!!!!!!!!!!!
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// --------------------------------------------------

// ----------ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЕЛЕМЕНТА-!!!!!!!!!!!!
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);
// ----------------------------------------------

// --------ДОВЖИНА МАСИВУ---------!!!!!!!!!!!!!!!!!!!
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);
// ------------------------------------------------------

// ----------ІНДЕКС ОСТАННЬОГО ЕЛЕМЕНТА----!!!!!!!!!!!!!!

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);
// ---------------------------------------------------------

// -----------ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ------!!!!!!!!!!!
// function getExtremeElements(array) {
//   array = [array[0], array[array.length - 1]];
//   //   console.log(array[0], array[array.length - 1]);
//   //   const firstArrayElement = array[0];
//   //   const lastArrayElement = array[array.length - 1];
//   //   console.log(firstArrayElement, lastArrayElement);
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// --------------------------------------------------

// -------------МЕТОД РЯДКІВ SPLIT()----!!!!!!!!!!!!!!!!!
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));
// ---------------------------------------------------------

// --------ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС----!!!!!!!!!!!!!!!!
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// function calculateEngravingPrice(message, pricePerWord) {
//   const messageIndex = message.split(' ');

//   const totalPrice = messageIndex.length * pricePerWord;
//   console.log(totalPrice);
//   return totalPrice;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// ------------------------------------------------------------

// ----------МЕТОД МАСИВУ JOIN()--------!!!!!!!!!!!!!!!!!!

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }
// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

// --------ЗАДАЧА: ГЕНЕРАТОР SLUG --------!!!!!!!!!!!!!!!!!!
// function slugify(title) {
//   title = title.toLowerCase();
//   const titleSplit = title.split(' ');
//   const titleSlug = titleSplit.join('-');
//   return titleSlug;
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// ----------МЕТОД SLICE()-----!!!!!!!!!!!!!!!!!!!!!!!!!!
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// --------------------------------------------------------

// -----------МЕТОД CONCAT()------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);
// ---------------------------------------------------

// ---------ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ---!!!!!!!!!!!!!!!!!!!

// function makeArray(firstArray, secondArray, maxLength) {
//   const totalArray = firstArray.concat(secondArray);
//   if (maxLength < totalArray.length) {
//     return totalArray.slice(0, maxLength);
//   }
//     return totalArray;
// АБО МОЖНА ТАК------>
//   return maxLength < firstArray.concat(secondArray).length
//     ? firstArray.concat(secondArray).slice(0, maxLength)
//     : firstArray.concat(secondArray);
// Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 0));
// ---------------------------------------------------------

// --------ЦИКЛ FOR------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// };
// ------------------------------------------------------

// ---------ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)-----!!!!!!!!!!!!!
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// -------ІТЕРАЦІЯ ПО МАСИВУ----!!!!!!!!!!!!!!!!!!!

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
// ------------------------------------------------------

// ---------ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ-------!!!!!!!!!!!!!!!!!!
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const value of order) {
//     total += value;
//     }
//     return total;

// //     АБО звичайний цикл for
// //     for (let i = 0; i < order.length; i += 1) {
// //       total += order[i];
// //     }
// //   return total;

// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// // ---------------------------------------------------

// -------ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА---!!!!!!!!!!!!!
// Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   let arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }
//   }
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// -----------------------------------------------

// -----------МЕТОД PUSH()------------!!!!!!!!!!!!!!!!!
//Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// ------------------------------------------------

// ---------ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ--!!!!!!!
//Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {

//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// ------------------------------------------------

// -------МЕТОД INCLUDES()------!!!!!!!!!!!!!!!!!!
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));
// ---------------------------------------------------

// ----ЗАДАЧА: ОДНАКОВІ ЕЛЕМЕНТИ ДЕКІЛЬКОХ МАСИВІВ----!!!!!!!!!!!!!!!
// function getCommonElements(array1, array2) {
//   const repidElementsArray = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       repidElementsArray.push(element);
//     }
//   }
//   return repidElementsArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// --------------------------------------------------
// ------ЦИКЛ FOR...OF--------------------
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let price of order) {
//     total += price;
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// ---------------------------------------------------
// ---------ЗАЧАДА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ(повертає більші числа)---------
// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// -----------------------------------------------------
// ----------ЗАДАЧА: ПАРНІ ЧИСЛА (ОПЕРАТОР %)------!!!!!!!!!!!!!!!!!!!!!!!!
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// function getEvenNumbers(start, end) {
//   let evenElements = [];

//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       evenElements.push(i);
//     }
//   }
//   return evenElements;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// --------------------------------------------------

// ------ОПЕРАТОР BREAK-----!!!!!!!!!!!!!!!!!!!
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// ------------------------------------------------------

// --------------ОПЕРАТОР BREAK VS RETURN У ФУНКЦІЇ----!!!!!!!!!!
//Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {

//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// ------------------------------------------------

// --------------ЗАДАЧА: ФУНКЦІЯ INCLUDES()----!!!!!!!!
// function includes(array, value) {

// for (let element of array) {
//   if (element === value) {
//     return true;
//   }
// }
// return false;
// }

// -----АБО МЕТОДОМ INCLUDES + ТЕРНАРНИК ---------------------
// return array.includes(value)? true : false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
