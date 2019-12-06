$(document).ready(function() {
  const $wrapper = $(".page-wrapper");
  const up = $(".arrow#up");
  const arrow = $(".arrow#down");
  const cards = $(".proj-card");
  //   console.log(
  //     cards
  //       .children()
  //       .children()
  //       .find("a:even")
  //   );

  up.on("click", () => fullpage_api.moveSectionUp());
  arrow.on("click", () => {
    fullpage_api.moveSectionDown();
  });

  cards.on("click", function() {
    const linkd = $(this)
      .find("a:even")
      .attr("href");
    window.location.href = linkd;
  });

  $("#fullpage").fullpage({
    //options here
    licenseKey: "qZPydrC!p2",
    autoScrolling: true,

    css3: true,
    responsiveWidth: 900,
    scrollbar: true,
    scrollOverflow: false,
    loopBottom: true,
    loopTop: true,
    fixedElements: ".arrow#up, .arrow#down, #nav",
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    menu: "#myMenu",
    sectionsColor: ["whitesmoke", "whitesmoke", "whitesmoke", "whitesmoke"]
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
