$(document).ready(function() {
    var $numberOfCards = $(".card").length;
    var $lastIndex = $numberOfCards-1;
    var $next = $("#section3 .issues .card-nav.right"); 
    var $prev = $("#section3 .issues .card-nav.left");
    var $firstCardId = $("#section3 .issues .card-container .card").first().attr('id');
    
    $("#section3 .issues .card-container .card").first().addClass('active');
    $("#section3 .issues .card-container .card").hide();
    $("#section3 .issues .card-container .card.active").show();
    
    $("#section3 .card.active").css('background-image', 'url(/assets/section3/' + $firstCardId + '.png)');
    checkButton();
    
    function nextCard() {
        $(".card.active").removeClass('active').addClass('disappear');
        if($(".disappear").is(':last-child')){
            $(".card").first().addClass('active');
        } else {
            $(".disappear").next().addClass('active');
        }
        var $getCardId = $(".card.active").attr('id');
        $("#section3 .card.active").css('background-image', 'url(/assets/section3/' + $getCardId + '.png)');
        $(".disappear").removeClass('disappear');
        $(".card").show();
        $(".card-container .active").siblings().hide();
    }
    
    function prevCard() {
        $(".card.active").removeClass('active').addClass('disappear');
        if($(".disappear").is(':first-child')){
            $(".card").last().addClass('active');
        } else {
            $(".disappear").prev().addClass('active');
        }
        var $getCardId = $(".card.active").attr('id');
        $("#section3 .card.active").css('background-image', 'url(/assets/section3/' + $getCardId + '.png)');
        $(".disappear").removeClass('disappear');
        $(".card").show();
        $(".card-container .active").siblings().hide();
    }
    
    function checkButton() {
        if($(".card.active").index() === 0) {
                    $prev.addClass('hidden');
                    $next.removeClass('hidden');
                } else if($(".card.active").index() === $lastIndex) {
                    $next.addClass('hidden');
                    $prev.removeClass('hidden');
                } else {
                    $prev.removeClass('hidden');
                    $next.removeClass('hidden');
                }
    }
    
    $next.click(function() {
        nextCard();
        checkButton();
    });
    $prev.click(function() {
        prevCard();
        checkButton();
    });
 
});