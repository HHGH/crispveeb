$(document).ready(function(){

/** perfect scrollbar **/

$('.md-modal').perfectScrollbar({wheelSpeed:100});
/************************************************************** 

*******************SMOOTH SCROLL********************************

***************************************************************/

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-120
	    }, 500, 'easeInOutExpo', function () {
	       // window.location.hash = target;
	    });
	});






/**************************************************************/

// Cache selectors
var topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight()+250,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href=#"+id+"]").parent().addClass("active");
});​





/************************************************************** 

*******************SCROLL LOGO AND NAV**************************

***************************************************************/


	if ($(window).width() >= 950){	/* responsive */
	   $(window).scroll(function(){
	   		var scrollTop = $(window).scrollTop(),
	    	elementOffset = $('#firstDiv').offset().top,
	    	distance      = (elementOffset - scrollTop);

			if (distance > 100) {
				
				if ($("nav#mainNav").hasClass("navStatic")){
					$("nav#mainNav").removeClass("navStatic");
					$("nav#mainNav").css("width", "");
					$("nav#mainNav ul li").removeClass("liStatic" , 500, "swing");
					$(".logo").removeClass("logoMove", 500, "swing");
					$(".logo").removeClass("logoFixed", 20);
				}
			}

	        if(distance < 100){
				$(".navStatic").css("width", $(window).width());
	        	$("nav#mainNav").addClass("navStatic");
	        	$("nav#mainNav ul li").addClass("liStatic" , 500, "swing");
	        	$(".logo").addClass("logoFixed");
	        	$(".logo").addClass("logoMove", 500, "swing");
			}
		  
	    })
	}	

/************************************************************** 

*******************Open menu for mobile**************************

***************************************************************/

	$('.openMenu').click(function() {
		$("nav#mainNav ul").toggleClass("openedUl" );
		$("nav#mainNav ul li").toggleClass("openedLi" );
	});
/************************************************************** 

*******************PAKUME					*********************

***************************************************************/





if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.choose').click(function() {
	   $(".container h2").addClass("hidden" , 200, "swing");
	   $("h2#"+this.id).toggleClass("hidden" , 200, "swing");

	});
}
else {
	$('.choose').hover(function() {
  		$("h2#"+this.id).toggleClass("hidden" , 200, "swing");
  		$(".choose#"+this.id).toggleClass("chooseTog" , 100, "swing");
	});

}








/******************************************************************

******************************portfolio plugin********************

******************************************************************/



 
/*	CarouFredSel: a circular, responsive jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.dev7studios.com
*/
function highlight( items ) {
	items.filter(":eq(1)").toggleClass("active", 500, "swing");
	return items;
}




$("#portfolioSlider").carouFredSel({

	width: "100%",
	height: 420,
	circular: false,
	infinite:false,
	direction: "down",
	pagination : {
		container		: "#sliderNav",
		anchorBuilder	: function(nr) {
			if (nr == 1) {
				return "<a href='#'>"+"Veeb"+"</a>";
			}
			else if (nr == 2) {
				return "<a href='#'>"+"Logo"+"</a>";
			}
			else  {
				return "<a href='#'>"+"Muu"+"</a>";
			}
			
		}
	},
	items: {
		visible: 1,
		height: "variable"
	},
	scroll: {
		items: 1,
		duration: "auto",
	},
	auto: false,
	prev: {
		button: "#down",
		key: "down",

	},
	next: {
		button: "#up",
		key: "up",

	},


});


$(".muuSlider").carouFredSel({
		swipe: true,
		pagination : {
		container		: "#muuPagination",
		anchorBuilder	: function() {
			
				return "<a href='#'>"+"</a>";			
		}
	},




	width: "100%",
	height: 400,
	align: "center",
	circular: true,
	infinite:true,
	items: {
		visible: 3,
		height: "variable"
	},
	scroll: {
		items: 1,
		duration: "auto",
	},
	auto: false,
	prev: {
		button: ".prev_muu",
		key: "left",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);



		}
	},
	next: {
		button: ".next_muu",
		key: "right",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);


		}
	},
	onCreate: function (data) {

		data.items.filter(":eq(1)").toggleClass("active");
		$(window).resize(function(){
			if ($(window).width() <= 1399){	
				//do something
			}	
		});

	},



});


$(".logoSlider").carouFredSel({
		swipe: true,
		pagination : {
		container		: "#logoPagination",
		anchorBuilder	: function() {
			
				return "<a href='#'>"+"</a>";			
		}
	},
	width: "100%",
	height: 400,
	align: "center",
	circular: true,
	infinite:true,
	items: {
		visible: 3,
		height: "variable"
	},
	scroll: {
		items: 1,
		duration: "auto",
	},
	auto: false,
	prev: {
		button: ".prev_logo",
		key: "left",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);
		}
	},
	next: {
		button: ".next_logo",
		key: "right",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);
		}
	},
	onCreate: function (data) {

		data.items.filter(":eq(1)").toggleClass("active");


	}
});

$(window).resize(function(){
$("#portfolioSlider").carouFredSel({

	width: "100%",
	height: 420,
	circular: false,
	infinite:false,
	direction: "down",
	pagination : {
		container		: "#sliderNav",
		anchorBuilder	: function(nr) {
			if (nr == 1) {
				return "<a href='#'>"+"Veeb"+"</a>";
			}
			else if (nr == 2) {
				return "<a href='#'>"+"Logo"+"</a>";
			}
			else  {
				return "<a href='#'>"+"Muu"+"</a>";
			}
			
		}
	},
	items: {
		visible: 1,
		height: "variable"
	},
	scroll: {
		items: 1,
		duration: "auto",
	},
	auto: false,
	prev: {
		button: "#down",
		key: "down",

	},
	next: {
		button: "#up",
		key: "up",

	},


});
});

$(".webSlider").carouFredSel({
		swipe: true,
		pagination : {
		container		: "#webPagination",
		anchorBuilder	: function() {
			
				return "<a href='#'>"+"</a>";			
		}
	},
	width: "100%",
	height: 400,
	align: "center",
	circular: true,
	infinite:true,
	items: {
		visible: 3,
		height: "variable"
	},
	scroll: {
		items: 1,
		duration: "auto",
	},
	auto: false,
	prev: {
		button: ".prev",
		key: "left",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);
		}
	},
	next: {
		button: ".next",
		key: "right",
		onBefore : function (data) {
			highlight (data.items.visible);
			highlight (data.items.old);
		}
	},
	onCreate: function (data) {

		data.items.filter(":eq(1)").toggleClass("active");


	}
});





}); /* <--- ready function end*/