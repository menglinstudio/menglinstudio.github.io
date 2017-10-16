$(function(){
    $('.goMeng').click(function(){
        $('html,body').animate({scrollTop: 0}, 1500);
    });
});


$(function(){
    $('.goPort').click(function(){
        $('html,body').animate({scrollTop: $('#portFolio').offset().top}, 1500);
    });
});


$(function(){
    $('.goAbout').click(function(){
        $('html,body').animate({scrollTop: $('#aboutMe').offset().top}, 1500);
    });
});
