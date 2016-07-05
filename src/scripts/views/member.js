var tplMember = require("../templates/member.string");
SPA.defineView("member",{
	html:tplMember,
	plugins: ['delegated'],
	init:{
		mySwiper2:null
	},
	bindActions: {
		"go.zhuce": function(){
			//console.log(this.mySwiper);
			this.mySwiper2.slideTo(1)
		},
		"go.member": function(){
			//console.log(that.mySwiper);
			this.mySwiper2.slideTo(0)
		},
		"member-more":function(){
			spa.open("member-more",{
				ani:{
					name:"dialog",
					width:280,
					height:200
				}
			})
		}
		
	},
	bindEvents: {
		beforeShow:function(){
			 this.mySwiper2 = new Swiper('#member-swiper', {
			//autoplay: 5000//可选选项，自动滑动
				
			});
			
			
			console.log($(".user input"));
			$(".user input").focus();
		}
	}
	
});