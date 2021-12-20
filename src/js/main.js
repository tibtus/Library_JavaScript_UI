import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

/* console.log($('div').eq(2).find('.some')); */
/* console.log($('.some').closest('.findme').addClass('testclass')); */
console.log($('.more').eq(0).siblings());

/* console.log($('button').html("СЮДА НАЖМИТЕ")); */