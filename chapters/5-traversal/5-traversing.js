$(document).ready(function(){
    // change the back color of gc-5 from blue to green
    var $2ndChild = $('.parent').find('.child').eq(1);
    var $grandChild = $2ndChild.find('.grandchild').css('background-color', 'green');

    $('.parent .child:last-child .grandchild').css('background-color', 'green');

    $('.parent .child:nth-child(3) .grandchild').css('background-color', 'cyan');

    // lets traverse from GC - 6 to GC - 4
    var $gc6 = $('.parent').find('.child').eq(2).find('.grandchild').first();
    var $parent = $gc6.parent().parent();
    var $1stChild = $parent.find('.child').first();
    var $lastGrandChild = $1stChild.find('.grandchild').last();
    $lastGrandChild.css('background-color', 'pink');

    // option 2
    $($gc6.parent().siblings()[0]).find('.grandchild:nth-child(3)').css('border', '2px solid black');

    // you are at child-2. change the background color of all grandchilds in child-3
    $c2 = $('.parent > .child:eq(1)');
    $c2.next().children().css('background-color', 'brown');

    // closest
    var $gc3 = $('.parent > .child:eq(0) > .grandchild:eq(2)');
    console.log('closest parent with class random', $gc3.closest('.random'));
});