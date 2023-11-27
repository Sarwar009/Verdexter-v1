// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});





// counter 

var counterVariable = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counterVariable == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counterVariable = 1;
  }

});

// slider
var swiper = new Swiper(".blog-slider", {
	loop: true,
	slidesPerView: "1",
	speed: 500,
	effect: "coverflow",
	coverflowEffect: {
		slideShadows: false,
	},
	mousewheel: {
		invert: false,
	},
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		0: {
			effect: "slide",
			centeredSlides: false,
		},
		768: {
			slidesPerView: "2",
			centeredSlides: true,
		},
		1200: {
			slidesPerView: "3",
			centeredSlides: true,
		}
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: "fraction"
	},

});

// team

var swiperTeam = new Swiper(".team-swiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
  
	  200: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  750: {
		slidesPerView: 2,
		spaceBetween: 30
	  },
	  1024: {
		slidesPerView: 2.5,
		spaceBetween: 30
	  },
	  1100: {
		slidesPerView: 3,
		spaceBetween: 30
	  },
	}
  });

// testimonial 
var swiperTestimonial = new Swiper(".mySwiper", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });


// blog 
var swiperBlog = new Swiper('.blog-post-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-post-slider__pagination',
	  clickable: true,
	}
  });

//   Why choose us Collapse js

const collapsibles = document.querySelectorAll(".collapsible-header");
const onlyExpandOneCheckbox = document.querySelector("#only-expand-one");
let lastActiveCollapsibleBody = null;

function expand(el) {
  if (
    onlyExpandOneCheckbox &&
    onlyExpandOneCheckbox.checked &&
    lastActiveCollapsibleBody
  ) {
    unexpand(lastActiveCollapsibleBody);
  }
  el.style.maxHeight = el.scrollHeight + "px";
  el.classList.add("active");
  lastActiveCollapsibleBody = el;
}

function unexpand(el) {
  el.style.maxHeight = null;
  el.classList.remove("active");
}

collapsibles.forEach((collapsible) => {
  const collapsibleBody = collapsible.nextElementSibling;

  if (collapsibleBody.classList.contains("active")) {
    expand(collapsibleBody);
  }

  collapsible.addEventListener("click", function () {
    if (!!collapsibleBody.style.maxHeight) {
      unexpand(collapsibleBody);
    } else {
      expand(collapsibleBody);
    }
  });
});
