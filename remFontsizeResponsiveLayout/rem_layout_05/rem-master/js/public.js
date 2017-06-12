$(function () {
    initpage();
    $(window).resize(function () {
        initpage();
    });
});
function initpage() {
    var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
    var _html = document.getElementsByTagName('html')[0];
    view_width > 320 ? _html.style.fontSize = view_width / 320 * 16 + 'px' : _html.style.fontSize = 16 + 'px';
}