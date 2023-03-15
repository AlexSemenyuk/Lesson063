'use strict';
// Добавте обработчик события click для пингвина (его id равен "tux") который делает меню видимым (style.display = 'block').
// Переместите меню (например style.left = '123px' и style.top = '123px') в позицию мышки. Используйте свойства события pageX и pageY.
// Вместо события click используйте contextmenu для перехвата события нажатия правой кнопки мыши.
// Подавите появление стандартного контекстного меню.
// Добавте обработчик события click для всей страницы (document.body) который скрывает меню (style.display = 'none').
// Добавте обработчик события для каждой опции меню, который что-либо выполняет (например, вывод сообщения через alert).



const tux = document.getElementById('tux');
tux.addEventListener('contextmenu', changeTux, false);

const body = document.body;
body.addEventListener('click', hideTux, false);
body.addEventListener('contextmenu', showTux, false);

function hideTux (e){
    tux.style.display = `none`;
}

function showTux (e){
    e.preventDefault(showTux);
    tux.style.display = `block`;
    // tux.style.position = 'static';
}

function changeTux (e) {
    e.preventDefault(changeTux);
    tux.style.display = 'block';
    tux.style.position = "relative";
    let x = e.pageX - tux.offsetLeft;
    let y = e.pageY - tux.offsetTop;
    tux.style.left = x + "px";
    tux.style.top = x + "px";
    alert("Координаты: " + e.clientX + ":" + e.clientY);
}



// const img1 = document.createElement('img');
// img1.src = `/icons/star_on.png`;
// img1.style.width = "200px";
//
// body.append(img1);
// document.write(`<img src="/icons/star_off.png" width="200px"> </img>`);


// img1.addEventListener( 'click', eventXAndEventY, false );
//
//
// function eventXAndEventY(event) {
// alert("Координаты: " + event.clientX + ":" + event.clientY);
//     img1.style.position = `absolute`;
//     img1.style.left = event.clientX + "px";
//     img1.style.top = event.clientY + "px";
// }

