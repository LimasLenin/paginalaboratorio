document.addEventListener('DOMContentLoaded', function() {
  const estrellas = document.querySelectorAll('.estrella');

  estrellas.forEach(estrella => {
      estrella.addEventListener('click', function() {
          estrellas.forEach(e => e.classList.remove('seleccionada'));
          this.classList.add('seleccionada');
      });
  });

  estrellas.forEach(estrella => {
      estrella.addEventListener('mouseover', function() {
          estrellas.forEach(e => e.classList.remove('seleccionada'));
          this.classList.add('hover');
      });

      estrella.addEventListener('mouseleave', function() {
          estrellas.forEach(e => e.classList.remove('hover'));
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;

    function changeSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(changeSlide, 3000);
});
