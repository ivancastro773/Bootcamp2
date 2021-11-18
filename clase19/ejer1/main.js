var slideIndex = 0;
var val=0;
showSlides();
function showSlides() {
       var i=0;
       var slides = document.querySelectorAll(".mySlides");
       var len = slides.length;
       for (; i < len; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       val=slideIndex;
       console.log("el valor es "+val);
       console.log("slideIndex"+slideIndex);
       if(slideIndex > slides.length) {
           slideIndex = 1
           console.log("volvio a 1");
        }
       slides[slideIndex-1].style.display = "block";
       console.log(slides[slideIndex-1]);
}
function showSlidesPrev() {
       var i=0;
       var slides = document.querySelectorAll(".mySlides");
       var len = slides.length;
       for (; i < len; i++) {
        slides[i].style.display = "none";
       }
       slideIndex--;
       console.log("slideIndex"+slideIndex);
       if(slideIndex == 0) {
           slideIndex = 3
        }
       slides[slideIndex-1].style.display = "block";
}
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
next.addEventListener('click',showSlides);
prev.addEventListener('click',showSlidesPrev);
