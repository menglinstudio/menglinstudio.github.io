function closeMenu() {
  document.getElementById("menu-Toggle").checked = false;
}

function scrollHorizontally(e) {
	let skipFlag = $(window).width() < 1200;
	if( !skipFlag ) {
			e = window.event || e;
  		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  		var scrollSpeed = 70;
  		document.documentElement.scrollLeft -= (delta * scrollSpeed);
  		document.body.scrollLeft -= (delta * scrollSpeed);
  		e.preventDefault();
		}
	}
$(function() {
	scrollHorizontally();
	$(window).resize(function(){
		scrollHorizontally();
	});
});

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", scrollHorizontally);
}

// function bindEvent() {
// 			  let skipFlag = $(window).width() < 1200;
// 			  if( !skipFlag ) {
// 			  	$('.overview').css('transform', 'translateX(0px)' ); 
// 			  	let offset = 0;
// 			  	$("body").mousewheel(function(event, delta) {
// 			  	  	    let rightBound = -10640;
// 			  	        let leftBound = 0;
// 			  	        if( delta < 0 && offset <= rightBound ) { offset = rightBound ;return; }
// 			  	        if( delta > 0 && offset >= leftBound ) { offset = leftBound; return; }
// 			  	      	offset += (delta * 5);
// 			  	              $('.overview').css('transform', 'translateX(' + offset.toString() + 'px)' ); 
// 			  	              event.preventDefault();
// 			  	});
// 			  } else {
// 			  	$('.overview').css('transform', 'translateX(0px)' ); 
// 				$("body").unbind('mousewheel');
// 			  }
// 		  }
// 		  $(function() {
// 			bindEvent();
// 			  $(window).resize(function(){
// 				bindEvent();
// 			  });
// 		  });