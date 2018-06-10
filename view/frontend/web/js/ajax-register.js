require(["jquery", 'Magento_Customer/js/model/customer'], function($, customer){


	//waits for elements to load in checkout
	function waitForElement(elementPath, callBack){
	  window.setTimeout(function(){
		if($(elementPath).length){
		  callBack(elementPath, $(elementPath));
		}else{
		  waitForElement(elementPath, callBack);
		}
	  },500)
	}
	
	//get crosssell products / newsletter
	$.ajax({
	  url: "/harrigoregister/index/register",
	  type: "post",
	  data: { 
		cart: "yes"
	  },
	  success: function(response) {
		waitForElement("#registerblock",function(){
					$("#registerblock").html(response);
			});
	  },
	  error: function(xhr) {
	  }
	});
	

	//fix for back button in checkout
	var lasthash = "init";
	
	window.location.hash = '#interestedin';
	
	window.onpopstate = function() {
	  	if (lasthash == "#interestedin") {
			if (location.hash == "#shipping") {
				$("#interestedin .button.action.continue.primary").click();
			}
		}
	}
	
	$( document ).ready(function() {
		window.onhashchange = function() {
			if (location.hash == "#register") {
				$(".opc-progress-bar-item").first().children('span')[0].click();
			}
			if (location.hash == "#shipping") {
				$(".opc-progress-bar-item").first().next().children('span')[0].click();
			}
			lasthash = location.hash;
		};
	});

});

