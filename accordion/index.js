$(document).ready(function(){
    var $accordion = $('.accordion');
    $accordion.find('.panel-heading').click(function() {
        console.log($(this));
        $accordion.find('.panel-collapse').slideUp();
        $(this).next().slideDown();
    });
});