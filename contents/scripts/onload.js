module.exports = function initLoad() {

    if (localStorage["wine_night_auth"]) {
      //authenticated - do nothing
      console.log('authed');
      return false;
    } else {
        //rediret to authentication
        console.log('not authed');
        if (location.pathname != "/") {
            window.location = "/";
        }
    }

    setTimeout(function(){
        //hide the overlay
        $('.loading_overlay').addClass('hidden');

        //remove overlay and show the scroll down button
        setTimeout(function(){
            $('.scroll_down_container').addClass('activate');
            $('.loading_overlay').remove();
        }, 500);

        ////remove transition from close button for touch devices
        function isTouchDevice() {
            return window.ontouchstart !== undefined;
        }

        if(isTouchDevice()) {
            $('.icon_x_close').removeClass('transition');
        };
    }, 800);

    var vid = document.getElementById("bgvid");
    var ready = null;
    if ($(vid).length > 0) {
        vid.oncanplay = function() {
            $(this).addClass('activate_video');
            ready = true;
        };

        //fallback incase oncanplay event does not fire
        setTimeout(function() {
            if(!ready){
                $(vid).addClass('activate_video');
                ready = false;
            }
        }, 500);
    }



    //wintersith uses a module called typogrify to parse *.md files into readable html text, one of the filters it uses (widont) adds &nbsp; inbetween the last two words in certain tags to prevent widows. This feature doesn't work well for mobile, since it prevents wrapping. Removing the nbsp tags with jquery was the fastest way to achieve a fix for this problem
    $('h1, h2, h3, h4, .datum dt').html(function(i,h){
        return h.replace(/&nbsp;/g,' ');
    });
}

window.onload = function() {
    module.exports();
};