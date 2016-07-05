var tplShop = require("../templates/shop.string");

SPA.defineView("shop",{
	html:tplShop,
	
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			//console.log(vm);
			vm.livelist = [];
		}
	}],
	
	//init: {
		
	//},
	
	bindActions:{
		
	},
	init:{
		 ppp : null,
	},
	
	bindEvents: {
		
		'beforeShow': function(){
			//获得vm对象
			  ppp = this.getVM();
			//console.log(this.getVM())	
			$.ajax({
				url:"/zlwm/mock/livelist.json",
				//url:"/api/getLivelist.php",
				type:'get',
				data:{
					rtype: "orign"
				},
				success:function(a){
					//console.log(a)
					ppp.livelist=a.data;
					//console.log(vm.livelist);
				}
			});
			
		},	
		"show":function(){
		//下拉刷新
			  var scrollSize = 30;
		      var myScroll = this.widgets.homeHotScroll;
		      myScroll.scrollBy(0, -scrollSize);
		
		      var head = $('.head img'),
		          topImgHasClass = head.hasClass('up');
		      var foot = $('.foot img'),
		          bottomImgHasClass = head.hasClass('down');
		      myScroll.on('scroll', function () {
		          var y = this.y,
		              maxY = this.maxScrollY - y;
		          if (y >= 0) {
		              !topImgHasClass && head.addClass('up');
		              return '';
		          }
		          if (maxY >= 0) {
		              !bottomImgHasClass && foot.addClass('down');
		              return '';
		          }
		      });
		
		      myScroll.on('scrollEnd', function () {
		          if (this.y >= -scrollSize && this.y < 0) {
		              myScroll.scrollTo(0, -scrollSize);
		              head.removeClass('up');
		          } else if (this.y >= 0) {
		              head.attr('src', '/zlwm/images/ajax-loader.gif');
		              // ajax下拉刷新数据
		
		              $.ajax({
		                url: '/zlwm/mock/livelist-refresh.json',
		                //url:"/api/getLivelist.php",
		                data: {
		                  rtype: 'refresh'
		                },
		                success: function (rs){
		               	  //console.log(rs.data);
		                  ppp.livelist = rs.data.concat(ppp.livelist);
		                  //that.vm.livelist = that.formatData(newArray);
		                 // that.livelistArray = newArray;
		                 //vm.livelist=rs.data;
						  //ssconsole.log(rs);
		                  myScroll.scrollTo(0, -scrollSize);
		                  head.removeClass('up');
		                  head.attr('src', '/zlwm/images/arrow.png');
		                }
		              })
		
//	               setTimeout(function () {
//		               	$('.head').after(
//		               		"<div class='item'>add 1</div>"+
//		               		"<div class='item'>add 2</div>"+
//		               		"<div class='item'>add 3</div>"
//		               	);
//		               	myScroll.scrollTo(0, -scrollSize);//1
//		               	head.removeClass('up');//2
//		               	head.attr('src', '/zlwm/images/arrow.png');//3
//		               	//1,2,3加载成功后下拉回弹。
//		               }, 1000);
		              
		          }
		
		          var maxY = this.maxScrollY - this.y;
		          var self = this;
		          if (maxY > -scrollSize && maxY < 0) {
		              myScroll.scrollTo(0, self.maxScrollY + scrollSize);
		              foot.removeClass('down')
		          } else if (maxY >= 0) {
		              foot.attr('src', '/zlwm/images/ajax-loader.gif');
		              // ajax上拉加载数据
		
		              $.ajax({
		              	url:"/zlwm/mock/livelist-more.json",
		                //url: '/api/getLivelist.php',
		                data: {
		                  rtype: 'more'
		                },
		                success: function (rs) {
//		                  var newArray = that.livelistArray.concat(rs.data);
//		                  that.vm.livelist = that.formatData(newArray);
//		                  that.livelistArray = newArray;
		                  myScroll.refresh();
						  ppp.livelist = ppp.livelist.concat(rs.data);
		                  myScroll.scrollTo(0, self.y + scrollSize);
		                  foot.removeClass('down');
		                  foot.attr('src', '/zlwm/images/arrow.png');
		                }
		              });
//						setTimeout(function () {//设定时间加载更多
//			               	$('.foot').before(
//			               		"<div class='item'>add 1</div>"+
//			               		"<div class='item'>add 2</div>"+
//			               		"<div class='item'>add 3</div>"
//			               	);
//			               }, 500);
		          }
		      })
		    }
		  }
	
	
});