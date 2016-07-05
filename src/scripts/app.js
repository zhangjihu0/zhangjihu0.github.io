require("./lib/spa.min.js");//spa单界面应用；
require("./views/index.js");
require("./views/more.js");
require("./views/shop.js");
require("./views/member.js");
require("./views/home.js");
require("./views/search.js");
require("./views/font.js");
//require("./views/zhuce.js");
require("./lib/swiper-3.3.1.min.js");

SPA.config({
	indexView: "font"//设置默认首页
});
