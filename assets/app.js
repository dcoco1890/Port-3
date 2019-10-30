$(document).ready(function() {
    const $wrapper = $('.wrapper');
    const up = $('.arrow#up');
    const arrow = $('.arrow#down');

    up.on('click', () => fullpage_api.moveSectionUp());
    arrow.on('click', () => {
        fullpage_api.moveSectionDown();
    });

    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        scrollBar: true,
        dragAndMove: true,
        css3: true,
        responsiveWidth: 900,
        continuousVertical: true,
        scrollOverflow: false,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['About', 'Portfolio', 'Find Me'],

        anchors: ['firstPage', 'secondPage', '3rdPage'],
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});