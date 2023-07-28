$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
        e.preventDefault();
        $("html, body").toggleClass('menu-show');
    });
});