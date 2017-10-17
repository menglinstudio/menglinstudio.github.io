$(function (){
    $(window).load(function(){
        $(window).scroll(function(){
    var $this = $(this);
    var $thisTop=$this.scrollTop();
                        
    if($thisTop < 50){
        $('#goTop').hide ();
    }
    else{
　　　$('#goTop').show ();
　　　}                
　　})
　});
});