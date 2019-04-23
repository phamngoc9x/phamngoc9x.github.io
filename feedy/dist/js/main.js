$( document ).ready(function() {
    $( ".resize-menu" ).on( "click", function() {
		 $('.menu-left, .menu-top').toggleClass("resize");
	});
	
	$( ".resize-chatbox" ).on( "click", function() {
		 $('.chat-box').toggleClass("resize");
	});
	$(".chat-box, .menu-left").mCustomScrollbar({
		theme:"minimal-dark"
	});
	/*Fixed chat popup*/
    function popupChat(){
        var a = $('.container2').offset().left;
        var b = ($('.container2').width() + 15)*.27 -15//27% of .main width
        $('.chat-popup').css({
            position:'fixed',
            right: a,
            bottom: 0,
            width: b,
        })
    };
	$( ".chat-box ul li" ).on( "click", function() {
		//remove class active và pop up nếu đã có
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$('.chat-popup').removeClass('show-popup');
		}
		else{
			// click bật pop up
			$('.chat-popup').addClass('show-popup');
			
			// bỏ link ở thẻ a để khỏi chuyển page
			$(this).find('a').removeAttr('href');
			//thay thế hình ảnh, tên, trạng thái popup chat
			var str = $(this).find('.fd-name').text();
			$('.chat-popup .fd-name').text(str);
			var a = $(this).find('img').attr('src');
			var b = $(this).find('a').attr('class');
			$('.chat-popup .fd-img img').attr('src', a);
			if((b=='fd-busy')||(b=='fd-offline')){
				$('.chat-popup .content-header-left > a').attr('class', b);
			}
			else{
				$('.chat-popup .content-header-left > a').attr('class', '');
			}
			//khởi đông pop up fixed
			popupChat();
			// bỏ trạng thái active ở pop up đang mớ ( nếu có)
			$('.chat-box ul li').removeClass("active");
			// add class active cho khối vừa click vào
			$(this).addClass("active");	
		}
	});

	// Close chat popup
	var btnClose = document.getElementsByClassName('btn-close');
	btnClose[0].onclick = function(){
		var chatPopup = document.getElementsByClassName('chat-popup');
		chatPopup[0].classList.remove('show-popup');
		var activeChat = document.querySelectorAll('.chat-box ul li');
		for (var i = 0; i < activeChat.length; i++) {
			activeChat[i].classList.remove('active');
		}
	}
	// slider video top
	var owl = $('.fd-slider-video .list-video');
		owl.owlCarousel({
		items : 4,
		margin: 15,
		loop: true,
		center: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoWidth: false,
		startPosition: 0,
		URLhashListener: false,
		nav: true,
		navText: ["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"],
		rewind: true,
		navElement: 'div',
		slideBy: 1,
		responsive: {
			0: {
				items: 1
				},
			500: {
				items: 2
				},
			991: {
				items: 3               
			},
			1200: {
				items: 3               
			},
			1300: {
				items: 3              
			},
			1390: {
				items: 4              
			}
		},
	});
		// slider video top
	var owl = $('.banner-slider .banner-shop');
		owl.owlCarousel({
		items : 1,
		margin: 0,
		loop: true,
		center: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoWidth: false,
		startPosition: 0,
		URLhashListener: false,
		nav: true,
		dot: true,
		navText: ["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"],
		rewind: true,
		navElement: 'div',
		slideBy: 1,
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
			},
			1390: {
				items: 1              
			}
		},
	});
	//Calendar
	$('#mycalendar').monthly({
		mode: 'event',
		//jsonUrl: 'events.json',
		//dataType: 'json'
		//xmlUrl: 'events.xml'
	});
	//Coundown events
	$('#countdown').countdown({date: '30 november 2017 17:2'}, function() {
        $('#countdown').text('Đã hết thời gian tham gia!');
    });
    $('.btn-shortcut').on( "click", function() {
		 $('.perform-content img').fadeToggle();
	});
});