'use strict';

const phone = document.getElementById('phone');
console.log(phone);
phone.addEventListener( 'keypress', checkInput, false );


function checkInput(event) {
    let charCode = event.charCode;
    if (charCode != 0) {
        if (charCode < 45 || (charCode > 45 && charCode < 48) || charCode > 57) {       // со знаком минус
            event.preventDefault();
            alert(
                "Пожалуйста, используйте только цифры и знак '-"
                + "\n" + "charCode: " + charCode + "\n"
            );
        }
    }
}


// Вариант решения с ответа
// var func = function(e) {
//     if (e.charCode < 48 || e.charCode > 57) {                        // без знака минус
//         e.preventDefault();
//     }
// };
// document.getElementById('phone').addEventListener('keypress', func, false);