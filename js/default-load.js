$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out-left-sm',
    inDuration: 1500,
    outDuration: 600,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

    $(".name").click(function() {
        var classes = ["shake", "jello", "pulse", "flash", "rubberBand", "swing", "bounce", "flipInX", "hinge", "zoomOutLeft", "zoomOutUp", "zoomInLeft", "zoomInDown"];
        var index = Math.floor(Math.random()*classes.length);
        console.log(index);
        $(this).addClass('animated' + " " + classes[index]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
            function() {
                $(this).removeClass('animated' + " " + classes[index]);
                $('.emoji').removeClass('moveto');
            }
        );
        $('.emoji').addClass('moveto');
    });
});