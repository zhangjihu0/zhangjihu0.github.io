var tplHome = require("../templates/home.string");
SPA.defineView("home",{
	html:tplHome,
	bindEvents: {
		
		show: function(){
			var mySwiper = new Swiper("#home1-swiper",{
				autoplay : 3000,
				speed:300,
				loop : true,
				//direction : 'vertical'
			});
			var mySwiper = new Swiper("#section-swiper",{
				
				loop : false,
				
				
			});
		}
	}
});