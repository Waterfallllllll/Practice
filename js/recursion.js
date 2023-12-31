"use strict";

// Приём, когда функция вызывает сама себя называется рекурсией.


// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

function pow(x, n) {
    if (n === 1) { // База рекурсии
        return x; 
    } else {
        return x * pow(x, n - 1); // Шаг рекурсии
    }
}


console.log (pow(2, 2)); //4
console.log (pow(2, 3)); //8
console.log (pow(2, 4)); //16

// База рекурсии - это случай, который приводит сразу к завершению функции.
// Шаг рекурсии - это запуск вложенной функции, но уже с другим значением.
// Глубина рекурсии - это общее количество вложенных вызовов вместе с самым первым. Тут это число будет n.

let students = {
    js: [{
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],
    
    html: {
        basic: [{
            name: "Peter",
            progress: 20
        }, {
            name: "Ann",
            progress: 18
        }],
        
        pro: [{
            name: "Sam",
            progress: 10
        }]
    }
};

// Есть задача по вычислению общего процента прогресса со всех курсов которые у нас доступны. 

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;
    // Object.values(), когда нам интересно именно значение. То, что внутри таких свойств как js или html. Этот метод позволяет получить массив значений перечисляемых свойств объекта.
    // Array.isArray(), данная сущность проверяет ялвяется ли что-то массивом или нет. Возвращает true, если является массивом, и false в противном случае.
    for (let course of Object.values(data)) {

        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }

        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]; // С помощью return можно вернуть все что угодно.
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] = subDataArr[0];
            total[1] = subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);


function factorial(num) {
    if (Number.isInteger(num) === false || num === "string") {
        return "Number must be integer!";
    } else if (num == 0 || num < 0) {
        return 1;
    } else {
        if (num == 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
}

const res = factorial(4);
console.log(res);