(function () {
    "use strict";
    $('.service').on('click',function () {
        $(this).parent().find('.toogle-text').slideToggle();
        $(this).find('.arrow').toggleClass("arrow-up");
        $(this).find('.arrow').toggleClass("arrow-down");
    })
})();