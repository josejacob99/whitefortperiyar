$(document).ready(function(){

	// $.validate();

	setTimeout(function (){
		$(".owl-prev").addClass("app-sprite");
		$(".owl-next").addClass("app-sprite");
	},100);

	/*======Slider======*/
	$('.bxslider').bxSlider({
	  	auto: true,
	  	mode: 'fade',
	  	controls: false
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items: 8,
	            nav:true,
	            loop:true
	        }
	    }
	})

	/*======Scroll Smooth======*/
	jQuery.scrollSpeed(100, 800);


	/*======Mobile Nav======*/
	$('.btn-mobile').click(function(){
		$('nav ul').slideToggle();
	});


	if(window.innerWidth <= 800 ){
		$('ul li a').click(function(){
			$('nav ul').slideToggle();
		});
	}

	// $("#user-login-top").on("click", function(e) {
	//  	e.preventDefault();
	//     $("#user-login-wrapper").toggleClass("show");
	// });
	// $(document).on("click", function(e) {
	//  	e.preventDefault();
	//     if ($(e.target).is("#user-login-wrapper, #user-login-top") === false) {
	//       $("#user-login-wrapper").removeClass("show");
	//     }
	// });

	$(".btn-filter").on("click", function(e) {
	 	e.preventDefault();
	    $(".section-filter").toggleClass("active-filter");
	    $(".li-btn-filter").toggleClass("hide");
	    $(".li-hide-btn-filter").toggleClass("hide");

	});
	$(".btn-filter").click(function() {
	     $('html, body').animate({
	         scrollTop:$("#section-filter").offset().top - 200
	     }, 1000);
	  return false;
	 });



	$(".btn-hide-filter").on("click", function(e) {
	    $(".section-filter").removeClass("active-filter");
	    $(".li-hide-btn-filter").addClass("hide");
	    $(".li-btn-filter").removeClass("hide");
	});

	$("ul li .user-link").on("click", function(e) {
	 	e.preventDefault();
	 	console.log('Kooo');
		$(".user-menu").addClass('active-user-nav');
	});

	$(document).on("click", function(e) {
	    if ($(e.target).is(".user-menu, .user-link") === false) {
	      $(".user-menu").removeClass('active-user-nav');
	    }
	});

	$(".table thead tr th p").on("click", function(e) {
	 	e.preventDefault();
	 	console.log('LLooo');
		$(".dropdown").removeClass('active-type-dropdown');
		$(this).siblings('.dropdown').addClass('active-type-dropdown');
	});
	$(document).on("click", function(e) {
	    if ($(e.target).is(".table thead tr th p") === false) {
	      $(".dropdown").removeClass('active-type-dropdown');
	    }
	});



	/*======Code for Popups======*/
	$(".btn-recharge").click(function(){
		$('.popup-overlay').addClass('active-overlay');
		$('.popup-succsess').addClass('active-popup');
	});

	// $(".faq").click(function(){
	// 	$('.popup-overlay').addClass('active-overlay');
	// 	$('.popup-fail').addClass('active-popup');
	// });

	$(".popup-overlay, .icon-close").click(function(){
		$('.popup-overlay').removeClass('active-overlay');
		$('.popup-succsess').removeClass('active-popup');
		$('.popup-fail').removeClass('active-popup');
	});



	/*======Code for Tabs Link======*/
	$('.tabs ul li .link-transaction').click(function(){
		$('.tabs ul li').removeClass('active-item');
		$(this).parent().addClass('active-item');
		$('.tab-content').addClass('hide');
		$('.search-filter').removeClass('hide');
		$('.section-transactions').removeClass('hide');
	});
	$('.tabs ul li .link-topup').click(function(){
		$('.tabs ul li').removeClass('active-item');
		$(this).parent().addClass('active-item');
		$('.tab-content').addClass('hide');
		$('.search-filter').addClass('hide');
		$('.section-topup').removeClass('hide');
	});
	$('.tabs ul li .link-faq').click(function(){
		$('.tabs ul li').removeClass('active-item');
		$(this).parent().addClass('active-item');
		$('.tab-content').addClass('hide');
		$('.search-filter').addClass('hide');
		$('.faq-container').removeClass('hide');
	});

	/*======Number Validation======*/
	


	/*======Parallax======*/
	$('.parallax-one').scrollTie({
	    property: 'backgroundPositionY',
	    reverseDirection: true,
        speed: 0.2
	})

	/*======Nav link======*/
	$(".about").click(function() {
	     $('html, body').animate({
	         scrollTop:$("#aboutus").offset().top
	     }, 1000);
	  return false;
	 });

	$(".home").click(function() {
	     $('html, body').animate({
	         scrollTop:$("#home").offset().top
	     }, 1000);
	  return false;
	 });


	$('.aboutus').waypoint(function() {
	  $("nav ul li a").removeClass("active");
	  $("nav ul li a.about").addClass("active");
	}, { offset: 0 });

	$('.trusted-carriers').waypoint(function() {
	  $("nav ul li a").removeClass("active");
	  $("nav ul li a.home").addClass("active");
	}, { offset: 0 });

});

$(window).scroll(function() {
	var headerHeight = $('header').height() - 60;
	var appheaderHeight = $('header').height() - 120;
	var windowTop = $(window).scrollTop();
	if(windowTop>headerHeight){
		$("header").addClass("active-bg");
		
	}
	else{
		$("header").removeClass("active-bg");
	}

	if(windowTop>appheaderHeight){
		$(".tab-container").addClass("tab-container-padding");
	}
	else{
		$(".tab-container").removeClass("tab-container-padding");
	}
});


