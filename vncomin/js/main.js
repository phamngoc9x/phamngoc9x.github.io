
const PetProject = {
  Init: function () {
    console.log('init project');
    this.toggleDropdown();
    this.toggleMobileSidebar();
    this.sliderFuture();
  },

  onLoad: function () {
    console.log('onload project');
  },

  reSize: function () {
    console.log('resize project');
  },
  
  // Toggle dropdown menu
  toggleDropdown: function() {
    $( ".has-child > .main-menu__link" ).click(function() {
      $(this).toggleClass('active');
      event.preventDefault()
      $(this).parent().find( ".has-child__list" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
  },

  // Toggle Mobile Sidebar
  toggleMobileSidebar: function() {
    $(".header-mobile__btn, .header-mobile__overlay").click(function() {
      $('body').toggleClass('sidebar-active');
      $('html').toggleClass('hidden-scroll');
    });
  },

  // Slider Future
  sliderFuture: function() {
    var owl = $('.slider-future');
    if(owl != null){
      owl.owlCarousel({
        margin: 20,
        items: 4,
          responsive: {
              0: {
                  items: 1
              },
              574: {
                  items: 2
              },
              768: {
                  items: 3
              },
              991: {
                  items: 3
              },
              1200: {
                  items: 4
              },
              1300: {
                  items: 4
              }
          },
        nav: true,
        navText: ["<span class='icon icon--arrow-left'></i>","<i class='icon icon--arrow-right'></i>"],
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center: false,
        dots: false,
      })
    }
  },
}

$(document).ready(function () {
  PetProject.Init();
});

$(window).on('load', function () {
  PetProject.onLoad();
});

$(window).on('resize', function () {
  PetProject.reSize();
});
