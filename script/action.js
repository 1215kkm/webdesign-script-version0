$(document).ready(function(){
    //시험용
    /* setInterval(function(){
        $('.slide_box')
        .delay(1000).animate({marginLeft:'-1200px'}, 1000)
        .delay(1000).animate({marginLeft:'-2400px'}, 1000)
        .delay(1000).animate({marginLeft:'-3600px'}, 1000, function(){
            $('.slide_box').css({marginLeft:'0px'}, 1000)
        });    
    }) */
    
    //시험용
    setInterval(fade)
    function fade(){
        $('.fade_box li').eq(0).delay(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
        $('.fade_box li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
        $('.fade_box li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500).delay(0)
    }
    

})