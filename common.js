/**
 * Created by xieyufang on 2017/4/19.
 *
 */
(function(){
    function resizeBaseFontSize(){
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if(deviceWidth > 640){
            deviceWidth = 640;
        }
        rootHtml.style.fontSize = deviceWidth / 7.5 + "px";
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
    if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
            version = parseInt(v[1], 10);
        if(version >= 8){
            document.documentElement.classList.add('hairlines')
        }
    }

})();


function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}