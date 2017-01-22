$('#firstQuestion').click(function() {
	$('#firstAnswer').toggle(900);
});

$('#readMore').click(function() {
  $('#readMore').toggle(900);
	$('#moreContent').toggle(900);
  $('#readLess').toggle(900);
});

$('#readLess').click(function() {
    $('#moreContent').toggle(900);
    $('#readMore').toggle(900);
    $('#readLess').toggle(900);
});


$('#clickable').click(function() {
    $(this).toggleClass('spin');
});

$('#clickMe').click(function() {
    $(this).toggleClass('circle');
});

 var navPositionY = $('.introduction img').offset().top;


function logScroll(){
  
  if ($(window).scrollTop() >= navPositionY){
    $('.navbar')
      .css ('position','fixed')
      .css('top','0')
      .css ('right', '0')
      .css ('z-index', '1')
      .css ('opacity', '0.6')
  }
  else{
    $('.navbar')
     .css ('position','relative')
     .css ('opacity', '1')
  }
}

 window.onscroll = logScroll;

/*
var currentImage;

$( ".photocontainer" ).click(function(e) {
 currentImage = e.target;
 (function () {
    return trigger = true;
 })();       console.log(trigger);
  $(e.target)
  .css('position','fixed')
   .css('z-index','2')
  
  .animate({
 
   width:"100%",
   height:"100%",
   margin:0,
   top:0,
   left:0,   
  }, 900);
});
$( ".photocontainer").click(function() {
$(currentImage)

  .css('position','relative')
   .css('z-index','1')
   .animate({
   width:"150px",
   height:"250px",
   margin:"10px"
   }, 900, function() {

   });
});*/