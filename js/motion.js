$(window).load(function(){
	$('#wait').hide();
	});

$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#intro').height();
    var _y = $('#guide').height();
    var _z = _x + _y;
                        
    if($thisTop < _z){
        $('#goTop').hide();
        $('#goPort').hide();
        $('#goMeng').hide();
    }
    else{
        $('#goTop').show ();
        $('#goPort').show ();
        $('#goMeng').show ();
　　　}                
　　})
　});
});



function filter(param){
    if(param == 2){
        $(".portfolio").hide();
        $(".other").show();
        
    }else if(param == 3){
        $(".portfolio").hide();
        $(".app").show();
        
    }else if(param == 4){
        $(".portfolio").hide();
        $(".web").show();
        
    }else {
        $(".portfolio").show();  
    }
    }