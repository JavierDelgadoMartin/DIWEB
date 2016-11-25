var slideIndex = 1;
window.onload = function(){mostrarImagen(slideIndex)};

function cambiaImagen(n) {
    mostrarImagen(slideIndex += n);
}

function imagenActual(n) {
    mostrarImagen(slideIndex = n);
}

function mostrarImagen(n) {
    var i;
    var slides = document.getElementsByClassName("marco");
    var dots = document.getElementsByClassName("punto");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}