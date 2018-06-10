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
	


});

