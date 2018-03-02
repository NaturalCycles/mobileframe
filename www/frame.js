
$(document).ready(function(){

    var
        $body = $('body'),
        $cont1 = $('.cont1'),
        $sel1 = $('#sel1'),
        $frame = $('.frame'),
        $home1 = $('.home1')
    ;

    $sel1.change(function(){
        var v = $(this).val();

        $cont1.attr('dev', v);
    });

    $sel1.change();

    $home1.click(function(){
        ask();
        //$frame.attr('src', appUrl);
        //document.getElementById('frame1').src += '';
    });

    appUrl = getQueryParam('url') || '';
    if(!appUrl) return ask();
    //if(!appUrl) appUrl = 'http://127.0.0.1:8100/#/intro';


    $frame.attr('src', appUrl);

    function ask(){
        var url = prompt('Url:', appUrl);
        if(url.substr(0,4) != 'http') url = '//'+url;
        location.href = location.href.split('?')[0] + '?url='+encodeURIComponent(url);
        return url;
    }

});

function getQueryParam(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}
