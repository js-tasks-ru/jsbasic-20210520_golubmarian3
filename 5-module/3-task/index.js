function initCarousel() {
  // ваш код...

  //vol 4.0
  let carouselInner = document.querySelector('.carousel__inner');
  let translate = 0;
  let i = 0;
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  
  carouselArrowLeft.style.display = 'none';  

  document.addEventListener('click', function(event) {
    
    if (!event.target.classList.contains('carousel__arrow') && !event.target.parentElement.classList.contains('carousel__arrow')) {
      return;
    } else {      
      let whatArrow = event.target.classList.contains('carousel__arrow_right') || event.target.parentElement.classList.contains('carousel__arrow_right') ? 'right' : 'left';
      toSlide(whatArrow);
    }

  });

  function toSlide(whatArrow) {
    switch (whatArrow) {
      case 'right':
        carouselInner.style.transform = `translateX(${translate -= slideWidth}px)`;
        arrowSwitch(i += 1);
        break;
      case 'left':
        carouselInner.style.transform = `translateX(${translate += slideWidth}px)`;
        arrowSwitch(i -= 1);          
      break;
    }    
  }

  function arrowSwitch(i) {
    switch (i) {
      case 0:
        carouselArrowLeft.style.display = 'none';
        break;
      case 3:
        carouselArrowRight.style.display = 'none';
        break;
      default:
        carouselArrowLeft.style.display = '';
        carouselArrowRight.style.display = '';
    }
  }

  //vol 3.0
  // let carouselInner = document.querySelector('.carousel__inner');
  // let translate = 0;
  // let i = 0;
  // let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  // let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  // let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  
  // carouselArrowLeft.style.display = 'none';  

  // document.addEventListener('click', function(event) {
    
  //   if (!event.target.classList.contains('carousel__arrow') && !event.target.parentElement.classList.contains('carousel__arrow')) {
  //     return;
  //   } else {      
  //     let leftOrRight = event.target.classList.contains('carousel__arrow_right') || event.target.parentElement.classList.contains('carousel__arrow_right') ? 'right' : 'left';
  //     toSlide(leftOrRight);
  //   }

  // });

  // function toSlide (or) {
  //   switch (or) {
  //     case 'right':
  //       carouselInner.style.transform = `translateX(${translate -= slideWidth}px)`;
  //       i += 1;
  //       checkI(i);
  //       break;
  //     case 'left':
  //       carouselInner.style.transform = `translateX(${translate += slideWidth}px)`;
  //       i -= 1;
  //       checkI(i);          
  //     break;
  //   }    
  // }

  // function checkI(i) {
  //   switch (i) {
  //     case 0:
  //       carouselArrowLeft.style.display = 'none';
  //       break;
  //     case 3:
  //       carouselArrowRight.style.display = 'none';
  //       break;
  //     default:
  //       carouselArrowLeft.style.display = '';
  //       carouselArrowRight.style.display = '';
  //   }
  // }
  
  // vol 2.0  
  // let carousel = document.querySelector('.carousel');
  // let carouselInner = document.querySelector('.carousel__inner');
  // let translate = 0;
  // let i = 0;
  // let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  // let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  // let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  
  // carouselArrowLeft.style.display = 'none';  

  // carousel.addEventListener('click', function(event) {
  //   if (!event.target.classList.contains('carousel__arrow') && !event.target.parentElement.classList.contains('carousel__arrow')) {
  //     return;
  //   } else {
  //     toSlide(event);
  //   }
  // });

  // function toSlide (event) {

  //   if (event.target.classList.contains('carousel__arrow_right') || event.target.parentElement.classList.contains('carousel__arrow_right')) {
  //     carouselInner.style.transform = `translateX(${translate -= slideWidth}px)`;
      
  //     i += 1;
  //     checkI(i);

  //   } else {
  //     carouselInner.style.transform = `translateX(${translate += slideWidth}px)`;

  //     i -= 1;
  //     checkI(i);
  //   }
  // }

  // function checkI(i) {
  //   switch (i) {
  //     case 0:
  //       carouselArrowLeft.style.display = 'none';
  //       break;
  //     case 3:
  //       carouselArrowRight.style.display = 'none';
  //       break;
  //     default:
  //       carouselArrowLeft.style.display = '';
  //       carouselArrowRight.style.display = '';
  //   }
  // }


  // vol 1.0
  // let carousel = document.querySelector('.carousel');
  // let carouselInner = document.querySelector('.carousel__inner');
  // let translate = 0;
  // let i = 0;
  // let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  // let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  // let slideWidth = document.querySelector('.carousel__slide').offsetWidth;

  // if (i == 0) {
  //   carouselArrowLeft.style.display = 'none';
  // };

  // carousel.addEventListener('click', function(event) {
  //   if (!event.target.classList.contains('carousel__arrow') && !event.target.parentElement.classList.contains('carousel__arrow')) {
  //     return;
  //   } else {
  //     toSlide(event);
  //   }
  // });

  // function toSlide (event) {

  //   if (event.target.classList.contains('carousel__arrow_right') || event.target.parentElement.classList.contains('carousel__arrow_right')) {
  //     carouselInner.style.transform = `translateX(${translate += -slideWidth}px)`;
      
  //     i += 1;

  //     if (i == 0) {
  //       carouselArrowLeft.style.display = 'none';
  //     } else {
  //       carouselArrowLeft.style.display = '';
  //     }

  //     if (i == 3) {
  //       carouselArrowRight.style.display = 'none';
  //     } else {
  //       carouselArrowRight.style.display = '';
  //     }

  //   } else {
  //     carouselInner.style.transform = `translateX(${translate -= -slideWidth}px)`;

  //     i -= 1;

  //     if (i == 0) {
  //       carouselArrowLeft.style.display = 'none';
  //     } else {
  //       carouselArrowLeft.style.display = '';
  //     }

  //     if (i == 3) {
  //       carouselArrowRight.style.display = 'none';
  //     } else {
  //       carouselArrowRight.style.display = '';
  //     }
  //   }
  // }
  
}
