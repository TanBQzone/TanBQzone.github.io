console.log("©️2020-2023 谭必清·TanBQ\n除了标明引用的js代码外, 其他的均为作者所写, 请勿直接复制!\n部分js和css可能会出现bug, 请理解")

var navItems = document.querySelectorAll(".navitems ul li");
var pages = document.querySelectorAll(".page");

pages.forEach(function (page) {
    page.style.display = "none";
});

var initialPage = document.getElementById("page1");
initialPage.style.display = "block";

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var pageId = this.getAttribute("data-page");

        // 先取消所有导航项的高亮
        navItems.forEach(function (navItem) {
            navItem.classList.remove("selected");
        });

        // 高亮被点击的导航项
        this.classList.add("selected");

        // 隐藏所有二级页面
        pages.forEach(function (page) {
            page.style.display = "none";
        });

        // 显示目标页面
        var targetPage = document.getElementById(pageId);
        targetPage.style.display = "block";
    });
});