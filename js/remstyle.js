$(function(){
	 function setRem(){
        var clientWidth=$(window).width();
        var nowRem=(clientWidth*10/420);
        $("html,body").css("font-size",parseInt(nowRem)+"px");
    };
    setRem();

    var timer;
    $(window).bind("resize",function(){
        clearTimeout(timer)
        timer=setTimeout(function(){
            setRem();
        }, 100)
    })
});

