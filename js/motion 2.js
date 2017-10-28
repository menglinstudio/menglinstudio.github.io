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
    }
    else{
　　　$('#goTop').show ();
　　　}                
　　})
　});
});


$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#intro').height();
    var _y = $('#guide').height();
    var _k = $('#portFolio').height();
    var _z = _x + _y + _k;
                        
    if($thisTop < _z){
        $('#goPort').hide();
    }
    else{
　　　$('#goPort').show ();
　　　}                
　　})
　});
});


$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#intro').height();
    var _y = $('#guide').height();
    var _k = $('#portFolio').height();
    var _z = _x + _y;
    var _zk = _x + _y + _k - 1;
                        
    if($thisTop < _z || $thisTop > _zk){
        $('#goMeng').hide();
    }
    else{
　　　$('#goMeng').show ();
　　　}                
　　})
　});
});




function filter(param){
    if(param == 3){
        $(".portfolio").hide();
        $(".other").show();
        
    }else if(param == 2){
        $(".portfolio").hide();
        $(".app").show();
        
    }else {
        $(".portfolio").show();  
    }
    }