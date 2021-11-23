


//------------------------------Carousel----------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(newIndex) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (newIndex > slides.length) { slideIndex = 1 }
    if (newIndex < 1) { slideIndex = slides.length }
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });

    Array.from(dots).forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    })

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//

//----------------------------------


