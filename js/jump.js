$(window).load(function(){
	$('#loading').hide();
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
        $('#goTop').hide ();
    }
    else{
　　　$('#goTop').show ();
　　　}                
　　})
　});
});