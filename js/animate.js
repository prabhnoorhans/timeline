$('.info').hide();

$('#events li:nth-child(1) .event_info').click(function() {
	$('h1, #line').fadeOut(1000);
	$('#info_1').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_1').fadeOut(1000);
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(2) .event_info').click(function() {
	$('h1, #line').fadeOut(1000);
	$('#info_2').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_2').fadeOut(1000);
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(3) .event_info').click(function() {
	$('h1, #line').fadeOut(1000);
	$('#info_3').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_3').fadeOut(1000);
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(4) .event_info').click(function() {
	$('h1, #line').fadeOut(1000);
	$('#info_4').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_4').fadeOut(1000);
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(5) .event_info').click(function() {
	$('h1, #line').fadeOut(1000);
	$('#info_5').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_5').fadeOut(1000);
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(6) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_6').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_6').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(7) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_7').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_7').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(8) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_8').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_8').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(9) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_9').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_9').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(10) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_10').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_10').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(11) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_11').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_11').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

$('#events li:nth-child(12) .event_info').click(function() {
	$('h1, #line').fadeOut();
	$('#info_12').fadeIn(1000);
	$('.cross').click(function() {
		$('#info_12').fadeOut();
		$('h1, #line').fadeIn(1000);
	});
});

// http://stackoverflow.com/questions/23952491/jquery-mousewheel-scroll-horizontally
(function() {
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.documentElement.scrollLeft -= (delta*90); // Multiplied by 40
    document.body.scrollLeft -= (delta*100); // Multiplied by 40
    e.preventDefault();
}
if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}
})();