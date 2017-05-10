$(function() {

	$('.advice-services .service').equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
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

	/*** owl carousel ***/
	var owl = $('.main-slider').owlCarousel({
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

});
