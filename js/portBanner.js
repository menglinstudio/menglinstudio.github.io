$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
                        
    if($thisTop < 50){
        $('#headBar').hide ();
    }
    else{
　　　$('#headBar').show ();
　　　}                
　　})
　});
});