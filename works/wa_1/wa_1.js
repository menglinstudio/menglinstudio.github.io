$(window).load(function(){
	$('#wait').hide();
	});

$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#home').height();
                        
    if($thisTop < _x){
        $('#header').hide();
    }
    else{
　　　$('#header').show ();
　　　}                
　　})
　});
});
