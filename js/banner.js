$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
    var _x = $('#menglin').height();
    var _y = $('#linkBox').height();
    var _z = _x - _y;
                        
    if($thisTop < _z){
        $('#headBar').hide ();
        $('#goBar').hide ();
    }
    else{
　　　$('#headBar').show ();
     $('#goBar').show ();
　　　}                
　　})
　});
});


$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
                        
    if($thisTop > 300){
        $('#scro').hide ();
    }                
　　})
　});
});