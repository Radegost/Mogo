function toogleSlideDown($item) {
    $($item).slideToggle( "slow", function() {
        var _this = $(this);
        var arrow = _this.parent().find('.service').find('.arrow');
        arrow.toggleClass("arrow-up");
        arrow.toggleClass("arrow-down");
    });
}

