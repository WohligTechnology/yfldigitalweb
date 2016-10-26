$(window).load(function() {
	"use strict";
    /* ==============================================
    PRELOADER
    =============================================== */
    var preloaderDelay = 20;
    var preloaderFadeOutTime = 20;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation');
        var preloader = $('#preloader');

        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime, function() {
        	setTimeout(startPage, 1000);
         });
    }

    hidePreloader();
    
    function startPage() {
		$("#home-1").removeClass("fadeOut-1").addClass("fadeIn-1");
		setTimeout ( function () {
			$('.timer ul li').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-2").addClass("fadeIn-2");
				},  k * 250 );	
			});
		},350 );
		setTimeout ( function () {
			$("#home .intro h2").removeClass("fadeOut-2").addClass("fadeIn-2");
		},700 );
		setTimeout ( function () {
			$(".menu").removeClass("fadeOut-3").addClass("fadeIn-3");
		},1500 );
		setTimeout ( function () {
			$('.menu li a').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-2").addClass("fadeIn-2");
				},  k * 250 );	
			});
		},2000 );
		setTimeout ( function () {
			$(".footer-content").removeClass("fadeOut-2").addClass("fadeIn-2");
		},2300 );
		setTimeout ( function () {
			$(".footer-content h4").removeClass("fadeOut-2").addClass("fadeIn-2");
		},3300 );
		setTimeout ( function () {
			$('.footer-content a span').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-1").addClass("fadeIn-1");
				},  k * 250 );	
			});
		},2500 );
		setTimeout ( function () {
			$("#cookies-message").fadeIn();
		},3600 );
	} /*  End animation section home */

}); 

$(document).ready(function(){
	"use strict";
	
	/* ==============================================
    DIV's POSITION
    =============================================== */
	
	var windowHeight = $(window).height();
	var homePageHeight = $('#home').height();
	
if (windowHeight >= homePageHeight){
		$('#home').css("padding-top", (((windowHeight-homePageHeight)/2)-20));
		$('#home').css("padding-bottom", (((windowHeight-homePageHeight)/2)-20));
	}
	$(window).resize(function() {		
		var windowHeight = $(window).height();
		var homePageHeight = $('#home').height();
		var designPageHeight = $('#design-content').height();
		var webPageHeight = $('#web-content').height();
		var appPageHeight = $('#app-content').height();
		var aboutPageHeight = $('#about-content').height();
		var companyPageHeight = $('#company-content').height();
		var contactPageHeight = $('#contact-content').height();
		

		if (windowHeight >= homePageHeight){
			$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
			$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			$('#design-content').css("padding-top", ((windowHeight-designPageHeight)/2));
			$('#design-content').css("padding-bottom", ((windowHeight-designPageHeight)/2));
			$('#web-content').css("padding-top", ((windowHeight-webPageHeight)/2));
			$('#web-content').css("padding-bottom", ((windowHeight-webPageHeight)/2));
			$('#app-content').css("padding-top", ((windowHeight-appPageHeight)/2));
			$('#app-content').css("padding-bottom", ((windowHeight-appPageHeight)/2));
			$('#about-content').css("padding-top", ((windowHeight-aboutPageHeight)/2));
			$('#about-content').css("padding-bottom", ((windowHeight-aboutPageHeight)/2));
			$('#company-content').css("padding-top", ((windowHeight-companyPageHeight)/2));
			$('#company-content').css("padding-bottom", ((windowHeight-companyPageHeight)/2));
			$('#contact-content').css("padding-top", ((windowHeight-contactPageHeight)/2));
			$('#contact-content').css("padding-bottom", ((windowHeight-contactPageHeight)/2));
		}
	});
	
	
	
	/* ==============================================
    /* GOOGLE MAPS
	================================================== */

	  var styles = [
	    {
	      stylers: [
	        { saturation: -100 }
	      ]
	    }
	  ];

	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.
	  var styledMap = new google.maps.StyledMapType(styles,
	    {name: "Styled Map"});

	  // Create a map object, and include the MapTypeId to add
	  // to the map type control.
	  var mapOptions = {
	    zoom: 14,
	    scrollwheel: false,
	    center: new google.maps.LatLng(40.713334, -74.004483),
	    markers: [{
	      latitude: 40.713334,
		  longitude: -74.004483
		}],
	    mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	    }
	  };
	  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	  //Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');
	
	/* ==============================================
	TOOLTIPS
	=============================================== */
	$('.footer-content a').tooltip();
	
	/* ==============================================
	CLOSE COOKIES MESSAGE
	=============================================== */
	$(".close-cookies").click(function() {
		$("#cookies-message").fadeOut();
	});
	
	/* ==============================================
	ANIMATIONS
	=============================================== */
		
	/*  Start animation section home  */
	function startPage() {
		$("#home-1").removeClass("fadeOut-1").addClass("fadeIn-1");
		setTimeout ( function () {
			$('.timer ul li').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-2").addClass("fadeIn-2");
				},  k * 250 );	
			});
		},350 );
		setTimeout ( function () {
			$("#home .intro h2").removeClass("fadeOut-2").addClass("fadeIn-2");
		},700 );
		setTimeout ( function () {
			$(".menu").removeClass("fadeOut-3").addClass("fadeIn-3");
		},1500 );
		setTimeout ( function () {
			$('.menu li a').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-2").addClass("fadeIn-2");
				},  k * 250 );	
			});
		},2000 );
		setTimeout ( function () {
			$(".footer-content").removeClass("fadeOut-2").addClass("fadeIn-2");
		},2300 );
		setTimeout ( function () {
			$(".footer-content h4").removeClass("fadeOut-2").addClass("fadeIn-2");
		},3300 );
		setTimeout ( function () {
			$('.footer-content a span').each(function( k ) {	
				var el = $(this);
				setTimeout ( function () {
					el.removeClass("fadeOut-1").addClass("fadeIn-1");
				},  k * 250 );	
			});
		},2500 );
	} /*  End animation section home  */
	
	/*  Start animation section about  */
	$("#about").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#about-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var aboutPageHeight = $('#about-content').height();
			if (windowHeight >= aboutPageHeight){
				$('#about-content').css("padding-top", ((windowHeight-aboutPageHeight)/2));
				$('#about-content').css("padding-bottom", ((windowHeight-aboutPageHeight)/2));
			}
			setTimeout ( function () {
				$("#about-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".about-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".about-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section about  */
	
	
	/*  START animation back to home from about  */
	$("#close4").click(function() {
		$("#about-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#about-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".about-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".about-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from about  */
	
	
	/*  Start animation section design  */
	$("#design").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#design-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var designPageHeight = $('#design-content').height();
			if (windowHeight >= designPageHeight){
				$('#design-content').css("padding-top", ((windowHeight-designPageHeight)/2));
				$('#design-content').css("padding-bottom", ((windowHeight-designPageHeight)/2));
			}
			setTimeout ( function () {
				$("#design-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".design-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".design-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section design  */
	
	
	/*  START animation back to home from design  */
	$("#close1").click(function() {
		$("#design-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#design-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".design-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".design-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from design  */
	
	
	
	
	/*  Start animation section web  */
	$("#web").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#web-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var webPageHeight = $('#web-content').height();
			if (windowHeight >= webPageHeight){
				$('#web-content').css("padding-top", ((windowHeight-webPageHeight)/2));
				$('#web-content').css("padding-bottom", ((windowHeight-webPageHeight)/2));
			}
			setTimeout ( function () {
				$("#web-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".web-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".web-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section web  */
	
	
	/*  START animation back to home from web  */
	$("#close2").click(function() {
		$("#web-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#web-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".web-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".web-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from web  */
	
	
	
	
	/*  Start animation section app  */
	$("#app").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#app-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var appPageHeight = $('#app-content').height();
			if (windowHeight >= appPageHeight){
				$('#app-content').css("padding-top", ((windowHeight-appPageHeight)/2));
				$('#app-content').css("padding-bottom", ((windowHeight-appPageHeight)/2));
			}
			setTimeout ( function () {
				$("#app-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".app-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".app-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section app  */
	
	
	/*  START animation back to home from app  */
	$("#close3").click(function() {
		$("#app-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#app-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".app-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".app-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from app  */
	
	
	

	/*  Start animation section story  */
	$("#story").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#story-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var storyPageHeight = $('#story-content').height();
			if (windowHeight >= storyPageHeight){
				$('#story-content').css("padding-top", ((windowHeight-storyPageHeight)/2));
				$('#story-content').css("padding-bottom", ((windowHeight-storyPageHeight)/2));
			}
			setTimeout ( function () {
				$("#story-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".story-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".story-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section story  */
	
	
	/*  START animation back to home from story  */
	$("#close2").click(function() {
		$("#story-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#story-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".story-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".story-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from story  */
	
	
	
	
	/*  Start animation section love  */
	$("#love").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#love-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var lovePageHeight = $('#love-content').height();
			if (windowHeight >= lovePageHeight){
				$('#love-content').css("padding-top", ((windowHeight-lovePageHeight)/2));
				$('#love-content').css("padding-bottom", ((windowHeight-lovePageHeight)/2));
			}
			setTimeout ( function () {
				$("#love-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".love-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".love-text").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	}); /*  END animation section love  */
	
	
	/*  START animation back to home from love  */
	$("#close7").click(function() {
		$("#love-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();			
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#love-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".love-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".love-text").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from love  */
	
	
	
	
		
	/*  START animation section contact  */
	$("#contact").click(function() {
		$("footer").fadeOut("slow", function() {
			$("footer").addClass("footer-hide");
		});
		$("#home").fadeOut( "slow", function() {
			$("#contact-content").attr( "style", "display: block" );
			var windowHeight = $(window).height();
			var contactPageHeight = $('#contact-content').height();
			if (windowHeight >= contactPageHeight){
				$('#contact-content').css("padding-top", ((windowHeight-contactPageHeight)/2));
				$('#contact-content').css("padding-bottom", ((windowHeight-contactPageHeight)/2));
			}
			setTimeout ( function () {
				$('#map').animate({ opacity: 1 });
				$('.back-color').animate({ opacity: 0.8 });
			},750 );
			setTimeout ( function () {
				$("#contact-content .close").removeClass("fadeOut-1").addClass("fadeIn-1");
			},1500 );
			setTimeout ( function () {
				$(".contact-title h1").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2000 );
			setTimeout ( function () {
				$(".address p").removeClass("fadeOut-2").addClass("fadeIn-2");
			},2500 );
		
			
			$("#home-1").removeClass("fadeIn-1").addClass("fadeOut-1");
			$('.timer ul li').removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#home .intro h2").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".menu").removeClass("fadeIn-3").addClass("fadeOut-3");
			$('.menu li a').removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".footer-content h4").removeClass("fadeIn-2").addClass("fadeOut-2");
			$('.footer-content a span').removeClass("fadeIn-1").addClass("fadeOut-1");
			
		});
	});
	/*  END animation section contact  */
	
	
	/*  START animation back to home from contact  */
	$("#close6").click(function() {
		$("#contact-content").fadeOut("slow", function() {
			$("#home").attr( "style", "display: block" );
			$("footer").removeClass("footer-hide");
			var windowHeight = $(window).height();
			var homePageHeight = $('#home').height();		
			if (windowHeight >= homePageHeight){
				$('#home').css("padding-top", ((windowHeight-homePageHeight)/2));
				$('#home').css("padding-bottom", ((windowHeight-homePageHeight)/2));
			}
			$("#contact-content .close").removeClass("fadeIn-1").addClass("fadeOut-1");
			$(".contact-title h1").removeClass("fadeIn-2").addClass("fadeOut-2");
			$(".address p").removeClass("fadeIn-2").addClass("fadeOut-2");
			$("#contact-content form").removeClass("fadeIn-2").addClass("fadeOut-2");
			setTimeout ( function () {
				$('#map').animate({ opacity: 0 });
				$('.back-color').animate({ opacity: 0.65 });
			},500 );
			setTimeout(startPage, 500);
		});
	}); /*  END animation back to home from contact  */
	
	
});
