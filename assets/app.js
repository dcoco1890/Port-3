$(document).ready(function() {
  const $wrapper = $(".wrapper");
  const up = $(".arrow#up");
  const arrow = $(".arrow#down");

  up.on("click", () => fullpage_api.moveSectionUp());
  arrow.on("click", () => {
    fullpage_api.moveSectionDown();
  });

  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    css3: true,
    responsiveWidth: 900,
    scrollbar: true,
    scrollOverflow: false,

    fixedElements: ".arrow#up, .arrow#down, #nav",
    anchors: ["firstPage", "secondPage", "thirdPage"]
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
