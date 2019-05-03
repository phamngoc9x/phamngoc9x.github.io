
const PetProject = {
  Init: function () {
    console.log('init project');
    this.stickyMenu();
    this.sliderFuture();
    this.sliderGallery();
    this.sumoSelect();
    this.sliderNearby();
    this.manificPopup();
    this.sliderReview();
    this.btnDetail();
    this.btnSelect();
    this.datePicker();
    this.btnCartSelect();
    this.scrollFixed();
  },

  onLoad: function () {
    console.log('onload project');
  },

  reSize: function () {
    console.log('resize project');
  },
  // Sticky menu
  stickyMenu: function() {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var navbar = document.getElementById("navbar");
    var headerHome = $('.header--home');
    var headerDefault =$('.header--default');
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if((navbar!= null) && (headerHome.length!=0)){
        if (window.pageYOffset > sticky) {
          navbar.classList.add("header__sticky")
        } else {
          navbar.classList.remove("header__sticky");
        }
      }
      if(navbar!= null && headerDefault.length!=0){
        if (window.pageYOffset > sticky) {
          navbar.classList.add("header__sticky","fixed-top");
          headerDefault.addClass("header--sticky");
        } else {
          navbar.classList.remove("header__sticky","fixed-top");
          headerDefault.removeClass("header--sticky");
        }
      }
  
      
    }
  },
  
  // Slider future
  sliderFuture: function() {
    var owl = $('.slider-future');
    if(owl != null){
      owl.owlCarousel({
        margin: 15,
        items: 7,
          responsive: {
              0: {
                  items: 2
              },
              500: {
                  items: 2
              },
              991: {
                  items: 2
              },
              1200: {
                  items: 3
              },
              1300: {
                  items: 7
              }
          },
        nav: true,
        navText: ["<span class='icon icon--arrow-left'></i>","<i class='icon icon--arrow-right'></i>"],
        center: false,
        dots: false,
      })
    }
  },
  
  // Slider Gallery
  sliderGallery: function() {
    var owl = $('.gallery__slider');
    if(owl != null){
      owl.owlCarousel({
        margin: 0,
        items: 1,
          responsive: {
              0: {
                  items: 1
              },
              500: {
                  items: 1
              },
              991: {
                  items: 1
              },
              1200: {
                  items: 1
              },
              1300: {
                  items: 1
              }
          },
        nav: true,
        navText: ["<span class='icon icon--arrow-left'></i>","<i class='icon icon--arrow-right'></i>"],
        center: false,
        dots: false,
      })
    }
  },
  
  // Sumo Select
  sumoSelect: function() {
    $('.select').SumoSelect();
  },

  // Slider Nearby
  sliderNearby: function() {
    var owl = $('.slider-nearby');
    if(owl != null){
      owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 5,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 2
            },
            991: {
                items: 2
            },
            1200: {
                items: 3
            },
            1300: {
                items: 5
            }
        },
        nav: true,
        navText: ["<span class='icon icon--arrow-left'></i>","<i class='icon icon--arrow-right'></i>"],
        center: true,
        dots: false,
      })
    }
  },
  // manific Popup
  manificPopup: function() {
    $('.gallery-top').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a.img-link', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
    });
    $('.video-link').magnificPopup({type:'iframe'});
  },

  // Slider Gallery
  sliderReview: function() {
    var owl = $('.slider-review');
    if(owl != null){
      owl.owlCarousel({
        margin: 0,
        items: 1,
          responsive: {
              0: {
                  items: 1
              },
              500: {
                  items: 1
              },
              991: {
                  items: 1
              },
              1200: {
                  items: 1
              },
              1300: {
                  items: 1
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

  // Toggle Content
  btnDetail: function() {
    $( ".button--detail" ).click(function() {
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        $(this).html('Less'+'<img src="./images/icon-btn-right.svg">');
      }
      else{
        $(this).html('Detail'+'<img src="./images/icon-btn-right.svg">');
      }
      event.preventDefault()
      $(this).parent().find( ".list-info" ).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
  },
  // Toggle select
  btnSelect: function() {
    $( ".button--select" ).click(function() {
      $(this).toggleClass('active');
      //console.log('fdsfsd');
      $(this).parents(".box-select").toggleClass('active');
      if($(this).hasClass('active')){
        $(this).html('Selected');
      }
      else{
        $(this).html('Select');
      }
    });
  },
  // Datepicker 
  datePicker: function() {
    $('.datepicker').datepicker({
      trigger: '.date-btn',
      getMonthName: true
    });
    $('.datepicker1').datepicker({
      trigger: '.date-btn1',
      getMonthName: true
    });
  },

  // Toggle cart select
  btnCartSelect: function() {
    $( ".cart__inner" ).click(function() {
      $(this).find('.arrow-change').toggleClass('active');
      $(this).parent().find(".cart__select").slideToggle( "slow", function() {
        // Animation complete.
      });
    });
  },
  // Scroll fixed cart
  scrollFixed: function() {
    var length = $('.content-left').height() - $('.box-cart').height() + $('.content-left').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('.cart').height() + 60 + 'px';
        var width = $('.content-right').width() + 'px';
        if (scroll < $('.content-left').offset().top) {

            $('.box-cart').css({
                'position': 'absolute',
                'top': '0',
                'width': width
            });

        } else if (scroll > length) {

            $('.box-cart').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto',
                'width': width
            });

        } else {

            $('.box-cart').css({
                'position': 'fixed',
                'top': '85px',
                'height': height,
                'width': width
            });
        }
    });
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
