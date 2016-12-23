$(document).ready(function(){ 
    $(function(){
        $('#text-slide .text-item:gt(0)').hide();
        setInterval(function(){
          $('#text-slide :first-child').fadeOut(700)
             .next('.text-item').fadeIn(1100)
             .end().appendTo('#text-slide');}, 
          3500);
    });
});

// $(document).ready(function() {
//     setupRotator();
// });

// function setupRotator() {
//     if($('.text-item').length > 1) {
//         $('.text-item:first').addClass('text-underlined').fadeIn(500);
//         var interval = setInterval('textRotate()', 5000);
//     }
// }

// function textRotate() {
//     var current = $('#text-slide > .text-underlined');
//     if(current.next().length == 0) {
//         current.removeClass('text-underlined').fadeOut(500);
//         current.dequeue();
//         $('.text-item:first').addClass('text-underlined').fadeIn(500);
//     } else {
//         current.removeClass('text-underlined').fadeOut(500);
//         current.dequeue();
//         current.next().addClass('text-underlined').fadeIn(500);
//     }
// }

