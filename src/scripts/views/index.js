var tplIndex = require("../templates/index.string");
SPA.defineView("index1",{
	html: tplIndex,
	plugins: ['delegated'],
	
	modules: [{
    	name: 'content', // 子视图的名字，用作后边引用的句柄
    	views: ['home','search', 'more','member','shop'], // 定义子视图的列表数组
    	defaultTag: 'home', // 定义默认视图
    	container: '.l-container' // 子视图的容器
  	}],
	bindActions:{
	"switch.tabs": function(e,data){
		$(e.el).addClass("action").siblings().removeClass("action");
		//console.log(this);
		this.modules.content.launch(data.y);
		console.log(data);
		}
	}
//	bindEvents:{
//		show: function(){
//	var myScroll = new IScroll("#home-scroll");
//		}
//	}
});

