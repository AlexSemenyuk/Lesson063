'use strict';
const slides = document.querySelectorAll('main > .slide');
for (const slideElement of slides) {
    console.log(slideElement);
}
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
console.log(prev);
const dots = document.querySelectorAll('.dot');

let slideIndex = 1;

function showSlide (n){
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

showSlide(slideIndex);

prev.addEventListener('click', function (){
    showSlide(--slideIndex);
});

next.addEventListener('click', function (){
    showSlide(++slideIndex);
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function (){
        showSlide(slideIndex = i + 1);
    })
}