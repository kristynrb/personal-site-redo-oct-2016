// Code addapted from Marius Craciunoiu
// https://medium.com/@mariusc23

var didScroll; // this is a boolean (either true or false)
var lastScrollTop = 0;
var delta = 10; //delta is "change". This is the change where they've scrolled (in pixels) on the page.
var navbarHeight = $("nav").outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
  console.log(didScroll);
});

// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var scroll_position = $(this).scrollTop();
  console.log("this is the scroll position: " + scroll_position);

  if (Math.abs(lastScrollTop - scroll_position) <= delta)
    return;

    // If current position > last position AND scrolled past navbar...
  if (scroll_position > lastScrollTop && scroll_position > navbarHeight){
      // Scroll Down
      $("nav").removeClass("nav-down").addClass("nav-up");
  } else {
      // Scroll Up
      // If did not scroll past the document (possible on mac)...
      if(scroll_position + $(window).height() < $(document).height()) {
        $("nav").removeClass("nav-up").addClass("nav-down");
      }
    }
    lastScrollTop = scroll_position;
}
