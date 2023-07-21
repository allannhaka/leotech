//slide home
document.addEventListener("DOMContentLoaded", function () {
        let currentSlide = 0;
        const slides = document.querySelectorAll(".imgshome");
        function showSlide(n) {
                slides[currentSlide].style.display = "none";
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].style.display = "block";
        }
        function nextSlide() {
                showSlide(currentSlide + 1);
        }
        setInterval(nextSlide, 2000);
});

//slide manual servicos
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
        showSlides((slideIndex += n));
}
function currentSlide(n) {
        showSlides((slideIndex = n));
}
function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("textodeservicos");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
                slideIndex = 1;
        }
        if (n < 1) {
                slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
}


