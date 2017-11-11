$(window).load(function(){
	$('#wait').hide();
	});

$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var $thisWidth=jQuery(window).width();
    var _x = $('#intro1').height();
                        
    if($thisTop < _x){
        $('#floatnav').hide();
    }
    else if($thisWidth > 900){
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