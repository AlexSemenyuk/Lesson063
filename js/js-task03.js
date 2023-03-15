'use strict';
const img = document.getElementById('once_star');
function a (){
    alert('Hello');
    img.removeEventListener('click', a);
}
img.addEventListener('click', a);