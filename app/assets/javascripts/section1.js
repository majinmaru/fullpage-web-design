$(document).ready(function() {
    
    $(".history-description p:first").addClass('active');
    $(".timeline li:first").addClass('active');
    
    var $historyId = $(".history-description p").attr('id');

    $(".timeline li a").click(function() {
        var currentHref = $(this).attr('href');     //ex: #1844
        var currentYear = $(currentHref).attr('id'); //ex: 1844
        
        $(".timeline li").removeClass('active');
        $(this).parent().addClass('active');
        
        $(currentHref).siblings().hide();
        $(currentHref).show();
        $(currentHref).addClass('active');
        
        $(".history").css('background-image', 'url(/assets/section1/bg-' + currentYear + '.png)');
        $(".history-image").attr('src', '/assets/section1/'+ currentYear +'.png');
        return false;
    });
    
    
   /*
    $(".timeline li a").click(function() {
        $(".history-description p").removeClass('active');
        $(".timeline li").removeClass('active');
        $(this).parent().addClass('active');
        
        var currentP = $(this).attr('href'); // ex: #1844
        var currentYear = $(currentP).attr('id'); //ex: 1844
        
        $(".history").css('background-image', 'url(/assets/section1/bg-' + currentYear + '.png)');
        $(".history-image").attr('src', '/assets/section1/'+ currentYear +'.png');
        $(currentP).addClass('active');
        return false;
        
    });
    */
});