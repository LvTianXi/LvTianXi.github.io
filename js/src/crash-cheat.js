var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16-next1.png");
    document.title = "哦吼，怎么回事╭(°A°`)╮";
    clearTimeout(titleTime);
  } else {
    document.title = "嗯哼，小老弟(ฅ>ω<*ฅ)";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16-next.jpg");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});