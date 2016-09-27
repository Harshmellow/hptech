
// Under here belongs javascript for Highland Park Technology Club1
//



$(document).ready(function() {
   $('.signup-btn').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.signup-btn').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.signup-btn').click(function() {
       $(this).toggle(1000);
   }); 
});