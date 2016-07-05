var tplFont = require("../templates/font.string");
SPA.defineView("font",{
	html:tplFont,
	 
	// plugins:["delegated"],
	 plugins: ['delegated'],
	 bindActions: {
		"goto.index": function(){
			//console.log(0);
			SPA.open('index1');
			
		}
	},
	bindEvents: {
		show: function(){
			var mySwiper = new Swiper("#font-swiper",{
				loop: false,
				//direction : 'vertical'
			});
		}
	}

});
