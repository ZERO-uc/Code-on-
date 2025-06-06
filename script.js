// الحصول على عنصر التبديل
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        function toggleDarkMode() {
          document.documentElement.classList.toggle('darkModeToggle');
        }

        const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkModeToggle', isDark);
  

  // تحميل التفضيل عند بدء التحميل
  if (localStorage.getItem('darkModeToggle') === 'true') {
    document.body.classList.add('dark-mode');
  }
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const angle = 360 / totalSlides;
    
    
    function initSlider() {
        slides.forEach((slide, index) => {
            const rotateY = index * angle;
            const translateZ = 450; 
            
            slide.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
        });
    }

    function rotateSlider(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % totalSlides;
        } else {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
        
        const rotateY = currentIndex * angle;
        slider.style.transform = `rotateY(${-rotateY}deg)`;
    }
    
    
    nextBtn.addEventListener('click', () => rotateSlider('next'));
    prevBtn.addEventListener('click', () => rotateSlider('prev'));
    
    
    initSlider();
    
    
     setInterval(() => rotateSlider('next'), 3000);
});