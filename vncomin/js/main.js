const PetProject = {
  Init: function () {
    console.log('init project');
    this.toggleDropdown();
    this.toggleMobileSidebar();
    this.sliderCol4();
    this.sliderCol3();
    this.ckEditor();
    this.sumoSelect();
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
      event.preventDefault()
      $(this).toggleClass('active');
      $(this).parent().find( ".has-child__list" ).slideToggle( "slow", function() {});
    });
    $( ".has-child > .sub-menu__link" ).click(function() {
      event.preventDefault()
      //$(".sub-menu__item .child-menu" ).css("display","none");
      if($(this).hasClass('active')){
        $( ".has-child > .sub-menu__link" ).removeClass('active');
        $(this).removeClass('active');
        $(this).parent().find( ".child-menu" ).slideUp( "slow", function() {});
      }
      else{
        $( ".has-child > .sub-menu__link" ).removeClass('active');
        $(this).addClass('active');
        $(".sub-menu__item .child-menu" ).css("display","none");
        $(this).parent().find( ".child-menu" ).slideDown( "slow", function() {});
      }
     
      //$( ".has-child > .sub-menu__link" ).removeClass('active');
      //$(this).toggleClass('active');
      
    });
    $( ".list-upgrade__item" ).click(function() {
      $( ".list-upgrade__item" ).removeClass('active');
      $(this).toggleClass('active');
    });
    $( ".list-date__item" ).click(function() {
      $( ".list-date__item" ).removeClass('active');
      $(this).toggleClass('active');
    });
  },

  // Toggle Mobile Sidebar
  toggleMobileSidebar: function() {
    $(".header-mobile__btn, .header-mobile__overlay").click(function() {
      $('body').toggleClass('sidebar-active');
    });
  },

  // Toggle Mobile Sidebar
  ckEditor: function() {
    var name = $("textarea").attr("name");
    if(name == 'editor1'){
      CKEDITOR.replace( 'editor1',{
        height: '100px',
        toolbar: [
          { name: 'document', items: [ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
          [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],			// Defines toolbar group without name.
          { name: 'basicstyles', items: [ 'Bold', 'Italic' ] }
        ]
      });
    }
  },

  // Sumo Select
  sumoSelect: function() {
    $('.select').SumoSelect();
  },

  // Slider col4
  sliderCol4: function() {
    var owl = $('.slider-col4');
    if(owl != null){
      owl.owlCarousel({
        margin: 20,
        items: 5,
          responsive: {
              0: {
                items: 2,
                autoWidth:true
              },
              574: {
                  items: 3,
                  autoWidth:true
              },
              768: {
                  items: 3
              },
              991: {
                  items: 4
              },
              1200: {
                  items: 5
              },
              1300: {
                  items: 5
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

  sliderCol3: function() {
    var owl = $('.slider-col3');
    if(owl != null){
      owl.owlCarousel({
        margin: 20,
        items: 3,
          responsive: {
              0: {
                items: 2,
                autoWidth:true
              },
              574: {
                  items: 3,
                  autoWidth:true
              },
              768: {
                  items: 3
              },
              991: {
                  items: 3
              },
              1200: {
                  items: 3
              },
              1300: {
                  items: 3
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
