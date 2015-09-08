$(function(){
$('.rollover').hover(function(){
    var e = $(this);
    
    e.data('originalSrc', e.attr('src'));
    e.css('opacity',0);
    e.attr('src', e.attr('data-rollover'));
    e.animate({"opacity":1},"slow");
}, function(){
    var e = $(this);
    e.css('opacity',0);
    e.attr('src', e.data('originalSrc'));
    e.animate({"opacity":1},"slow");
}); /* a preloader could easily go here too */
});


$('#loginModal').on('hidden.bs.modal', function() {
    $('#loginForm').formValidation('resetForm', true);
});