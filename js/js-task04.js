// 'use strict';
// Вариант 1 - через теги(ОК)
// const star = document.getElementsByTagName('img');
// for (const starElement of star) {
//     starElement.addEventListener('mouseover', () => {
//         starElement.src = "/icons/star_on.png";
//     });
// }


// Вариант 2 - Через table (Ок, но очень сложно)
// const tbody = document.getElementById('star_table').firstElementChild;
// console.log(tbody);
// for (const tr of tbody.children) {
//     for (const td of tr.children) {
//         td.children[0].addEventListener('mouseover', () => {
//             td.children[0].src = "/icons/star_on.png";
//         });
//     }
// }

// Вариант 3 - Через target (Ок, ответ с теста)
let func = function(e) {
    if (e.target.src) {
        console.log(e.target.src);
        e.target.src = '/icons/star_on.png';
    }
};
document.getElementById('star_table').addEventListener('mouseover', func, false);


// const table = document.getElementById('star_table');
// console.log(table.target.src);           // не работает - не возвращает boolean