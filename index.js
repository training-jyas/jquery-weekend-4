console.log($);
console.log(jQuery);
console.log(window.$);
console.log(window.jQuery);

// we can use the document load event here

$(document).ready(function() {
    // $('div').html('Hello jQuery');
    $('div').text('Again hello jQuery');

    // var divs = document.getElementsByTagName('div');
    // for (var i = 0; i < divs.length; i++) {
    //     divs[i].innerHTML = 'hello';
    // }
});