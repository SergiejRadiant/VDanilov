$(function() {

	$('.advice-services .service').equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {

			$(".thank-href").trigger('click');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
			}, 2500);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/*** mobile menu btn ***/

	//Option of mobile-menu
	 $("#mobile-nav").mmenu({
    	extensions:['widescreen','theme-white','effect-menu-slide','pagedim-black'],
    	navbar:{
    		title: "Меню"
    	}
    });
	//Hamburger click handler
	var mmApi = $("#mobile-nav").data( "mmenu" );

 	mmApi.bind("closed",function(){
 		$(".toggle-mnu .sandwich").removeClass("active");
 	});

 	//Insert clone of main menu in nav where class = mobile-menu
 	var mobileUL = $(".main-nav ul li").clone();
		 $("#mobile-nav ul").append(mobileUL);

	$(".toggle-mnu").click(function() {

		$(".sandwich").toggleClass("active");
		mmApi.open();
		mmApi.close();

		return false;
	});

	/*** mobile menu btn ***/
	
	var d = $(document.createElement("div")).addClass("developers");
		h = $(document.createElement("a")).attr("href", "http://radiant-studio.ru").text("Сайт разработан - Радиант");
		$(d).append(h);
	$(".social-icons").append(d);

	/*** owl carousel ***/
	var owl = $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    dotsContainer: '.main-slider-dots-container',
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	// Go to the next item
	$('.main-slider-nav-next').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.main-slider-nav-prev').click(function() {
	    owl.trigger('prev.owl.carousel');
	});
	/*** owl carousel ***/

	/*********************************/

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//Яндекс карта
	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	            center: [55.658510, 37.482268],
	            zoom: 16,
	            controls: ['zoomControl']
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),
	        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	            hintContent: 'Россия, г. Москва, П-т Вернадского, д.117, м. Юго-Западная',
	            balloonContent: 'г. Москва, П-т Вернадского, д.117, м. Юго-Западная'
	        }, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: '../img/location.png',
	            // Размеры метки.
	            iconImageSize: [36, 57],
	            // Смещение левого верхнего угла иконки относительно
	            // её "ножки" (точки привязки).
	            iconImageOffset: [-18, -57]
	        });

	    myMap.geoObjects.add(myPlacemark);
	    myMap.behaviors.disable('scrollZoom'); 
	});

});
