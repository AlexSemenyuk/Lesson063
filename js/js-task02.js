'use strict';
const button = document.getElementById('w3c');
// 1. background
// button.onclick = function () {
//     button.style.background = '#ff8';
// };

button.addEventListener('click', () => {
    // this.style.background = '#ff8';          // Не работает
    button.style.background = '#ff8';
});

// 2. alert
button.addEventListener('click', function () {
    alert('Hello');
});

// button.addEventListener('click', () => {
//     alert('Hello');
// });

// button.onclick = () => {
//     alert('Hello');
// };