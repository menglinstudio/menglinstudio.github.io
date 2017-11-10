$(window).load(function(){
	$('#wait').hide();
	});

$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#intro1').height();
    var _y = $('#intro2').height();
    var _z = _x + _y;
                        
    if($thisTop < _z){
        $('#floatnav').hide();
    }
    else{
        $('#floatnav').show ();
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