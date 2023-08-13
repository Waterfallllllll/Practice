"use strict";
const btn = document.querySelector("button"),
    overlay = document.querySelector(".overlay");

btn.onclick = function () { // Назначаем тот элемент на который хотим повесить наше событие и дальше используем свойство dom дерева.
    alert("click"); // Назначаем что мы хотим сделать при клике на кнопку. 
}; // Такое код почти не испльзуется

btn.addEventListener("click", () => { // Он следит за нашим событием которое мы назначили, и если оно произошло, то выполняется callback функция. Callback функция выполнится только после того, как произойет событие(клик). Свойство callback функции. 
    alert("click"); 
});

btn.addEventListener("click", () => { // И мы можем выполнять это событие много раз, в отличии от других методов. Таким образом наш функционал не потеряется.
    alert("second click"); 
});

// События в javascript выполняются в порядке очереди. Как только у нас новое событие поступило, оно добавляется в очередь вне зависимости от других событий.

// btn.addEventListener("mouseenter", () => { // Действие mouseenter позволяет при наведении на блок выполнять функцию. 
//     console.log("Hover"); 
// });

// Нам иногда нужно получать какие-то данные о том элементе с которым мы взаимодействуем. Этот объект события передается как аргумент. Название не играет роли, и он всегда передается первым аргументом.

btn.addEventListener("click", (e) => { 
    // console.log("Hover");
    // console.log(e);
    console.log(e.target); // Теперь мы получаем доступ как самому элементу. Теперь мы можем с нашим элементом что-то сделать. Например, перекрасить его, поменять ему класс, или просто удалить его со страницы.
    e.target.remove(); // Удалили элемент
});

// //Иногда нам нужно удалять некоторые обработчики событий с некоторых элементов. Нам необходимо использовать точно такую же функцию, которую мы назначали. Ведь если мы создадим ещё одну такую же функцию, она не будет той же. Поэтому, чтобы иметь возможность удалить потом обработчик, нам её необходимо вынести в отдельную какую-то переменную.

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);

//     i++;
//     if (i == 1) {
//         btn.removeEventListener("click", deleteElement); // Обычно вот так делаем, когда что-то произошло и обработчик нам больше не нужен. 
//     }
// };

// btn.addEventListener("click", deleteElement); // После того, как у нас выполнится клик по этому элементу, у нас выполнится эта функция. Мы её не вызываем, мы не ставит круглые скобки. Мы просто ссылаемся на функцию которая будет выполняться после клика.


// Всплытие событий.

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);

//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener("click", deleteElement); // Обычно вот так делаем, когда что-то произошло и обработчик нам больше не нужен. 
//     // }
// };

// btn.addEventListener("click", deleteElement); // После того, как у нас выполнится клик по этому элементу, у нас выполнится эта функция. Мы её не вызываем, мы не ставит круглые скобки. Мы просто ссылаемся на функцию которая будет выполняться после клика.
// overlay.addEventListener("click", deleteElement);

// Это и называется всплытие событий. Когда данное действие срабатывает сначало на вложенном элементе и после этого поднимается наверх по эрархии нашего дом дерева. Причем мы ссылаемся на элемент на котором произошло изначальное событие. Но это можно подправить.

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElement); // Обычно вот так делаем, когда что-то произошло и обработчик нам больше не нужен. 
    // }
};

// btn.addEventListener("click", deleteElement); // После того, как у нас выполнится клик по этому элементу, у нас выполнится эта функция. Мы её не вызываем, мы не ставит круглые скобки. Мы просто ссылаемся на функцию которая будет выполняться после клика.
// overlay.addEventListener("click", deleteElement);

//В этом ключевая разница между e.target и e.currentTarget.

// Мы можем отменять стандартые поведения браузера.

const link = document.querySelector("a"); 

link.addEventListener("click", (event) => {
    event.preventDefault(); // Этот участок кода помещается всегда в самое самое начало. Отменяем стандартное поведение браузера.

    console.log(event.target);
}); 

// Если хотим навесить обработчик на несколько элементов сразу.

// const heart = document.querySelectorAll(".heart");

// heart.forEach(item => {
//     item.addEventListener("click", deleteElement);
// });

// Опции события

const heart = document.querySelectorAll(".heart");

heart.forEach(item => {
    item.addEventListener("click", deleteElement, {once: true}); // Классная альтернатива removeEventListener. 
});

