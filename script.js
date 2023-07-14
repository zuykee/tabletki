// const galleryContainer = document.querySelector('.slider-items');
// const galleryControlsContainer = document.querySelector('.slider-navigation');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelectorAll('.slider-item');

// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//   });

const swiper = new Swiper('.swiper', {
        // slidesPerView: 3,
        loop: true, 
       
        
        speed: 0,
        on: {
          init: function() {
            this.wrapperEl.style.transform = 'none';
          }
        },
         
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });