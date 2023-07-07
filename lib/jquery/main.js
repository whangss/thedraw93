$(".start-icon").click(function () {
  console.log("click");
  const offset = $(".section-2").offset();
  $("html, body").animate({ scrollTop: offset.top - 100 }, 700);
});

$(".header__menu-hamberger").on("click", function () {
  $(".header__menu-hamberger").toggleClass("on");
  $(".header__muenu-subWrap").fadeToggle("on");
  $("body").toggleClass("on");
});
