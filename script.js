"use strict";

// Задание 1

// Даны теги:
// <div id="block">
// <p>1</p>
// <p>2</p>
// </div>

// 1. Получите ссылку на первый абзац из div с id, равным block, выведите его в консоль.
// 2. Получите ссылку на первый абзац с классом www, выведите его в консоль.
// <p class="www">text1</p>
// <p class="www">text2</p>

// 1.
// const div = document.querySelector("#block");                // or ("div")
// const p = div.querySelectorAll("p");                         // все элементы
// console.log(p[0]);                                           // вывод в консоль по индексу

// const div = document.querySelector("#block p:first-child");  // аналогично, но с точным указанием
// console.log(div);

// 2.

// const p_www = document.querySelectorAll(".www"); // все элементы
// p_www.forEach((element) => console.log(element));            // вывод всех элементов через forEach
// console.log(p_www[0]);                                       // через номер индекса

// Задание 2

// 1. Дан тег <a class="link" href="#">link text html</a>
//         a. Вам необходимо поменять текст внутри ссылки на "link text js"
//         b. Заменить href на значение https://developer.mozilla.org/ru/
// 2. Дан тег <img class="photo" src="" alt="">
//            a. Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// 1.

// const link = document.querySelector(".link");
// link.textContent = "link text js";
// // link.href = "https://developer.mozilla.org/ru/";
// link.setAttribute("href", "https://developer.mozilla.org/ru/"); // альтернативный вариант присвоения, если href вообще нет
// console.log(link);

// 2.

// const img = document.querySelector(".photo");
// img.src = "https://2e.aonprd.com/Images/Monsters/Wraith.png";
// img.width = 320;

// Задание 3

// 1. Дан тег <div class="content"></div>
// 2. Создайте новый элемент p
// 3. Добавьте в него текст "Новый текстовый элемент"
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел

// const div = document.querySelector(".content");
// const p = document.createElement("p"); // создаем элемент p

// p.textContent = "Новый текстовый элемент"; // Добавляем текст
// div.appendChild(p); // Добавляем элемент p внутри div
// div.removeChild(p); // Удаляем

// Задание 4

// 1. Создать элемент button, добавить его в блок <div class="content"></div>
// 2. При клике на элемент в консоль выводится сколько раз пользователь нажал на данную кнопку

// const div = document.querySelector(".content");
// const btn = document.createElement("button");
// btn.textContent = "Нажми меня";
// div.appendChild(btn);

// let clickCount = 0;
// btn.onclick = function () {
//   clickCount++;
//   console.log(`Количество кликов по кнопке = ${clickCount}`);
// };

// const btnReset = document.createElement("button"); // Сщздадим кнопку для сброса счетчика
// btnReset.textContent = "Сброс";
// div.appendChild(btnReset);
// btnReset.onclick = function () {
//   clickCount = 0;
//   console.log(`Счетчик ${clickCount}`);
// };

// Задание 5

// 1. Дан тег <div class="content"></div>
// 2. Создать с помощью JS новый элемент button
// 3. Добавьте в него текст "Отправить"
// 4. При клике на данную кнопку необходимо, чтобы текс поменялся на "Текст отправлен"

// const div = document.querySelector(".content");
// const btn = document.createElement("button");
// div.appendChild(btn);
// btn.textContent = "Отправить";
// btn.onclick = function () {
//   btn.textContent = "Текст отправлен";
//   setTimeout(() => {
//     btn.textContent = "Отправить";
//   }, 1000);
// };
