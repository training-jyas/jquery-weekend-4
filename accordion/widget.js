var Accordion = function () {
    $this = this;
    console.log($this);
    $this.find('.panel-heading').click(function() {
        $this.find('.panel-collapse').slideUp();
        $(this).next().slideDown();
    });
}

// here the plugin name is accordion
// whenever one calls this accordion plugin Accordion is called
$.fn.accordion = Accordion;

$(document).ready(function () {
    // here we are calling the plugin
    $('.accordion').accordion();
});