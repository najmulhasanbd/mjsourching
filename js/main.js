(function ($) {
  "use strict";

  //sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 250) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  // industry 
  $('.industry_active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  //client
  $('.client_active').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  // /menu active
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.main_menu a');
    const sections = document.querySelectorAll('section');
  
    function removeActiveClass() {
      menuLinks.forEach(link => link.classList.remove('active'));
    }
  
    function setActiveSection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          removeActiveClass();
          const activeLink = document.querySelector(`.main_menu a[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }
  
    const observer = new IntersectionObserver(setActiveSection, {
      root: null,
      threshold: 0.6
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  
  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
  });


  //offcanvas hide
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.offcanvas-body a');

    links.forEach(link => {
      link.addEventListener('click', function () {
        const offcanvasElement = document.getElementById('offcanvasExample');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      });
    });
  });


  //animation
  AOS.init();


  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 300,
    animation: 'fade',
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>',
    activeOverlay: false,
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });

})(jQuery);
