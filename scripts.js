// slider effect
const wrapper = document.querySelector(".slidewrap");
const nextbtn = document.querySelectorAll(".nextButton");
const beforebtn = document.querySelectorAll(".beforeButton");
console.log("HI");



$(function carousel() {      
    // get a list of *all* slides:
    var slides = $('.sliderImg');
    // hide all but the first:    
    slides.slice(1).hide(); 
    var current = 0;

    setInterval(function() {
      // hide the current slide:
      slides.eq(current).hide(1000);
      // increment the counter, wrapping around from end of the
      // list to the beginning as required:
      current = (current + 1) % slides.length;
      // show the next slide after a timeout:
      setTimeout(function () {
         // note that `current` was incremented already:
         slides.eq(current).show(1000);
      }, 1000);
    }, 3500); // make the interval larger than the hide/show cycle
});