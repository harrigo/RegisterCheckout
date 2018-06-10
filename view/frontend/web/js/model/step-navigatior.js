define(
    [
        'jquery',
        'ko',
        'Magento_Customer/js/model/customer'
    ],
    function($, ko,customer) {
      navigateTo: function(code, scrollToElementId) {
        var sortedItems = steps.sort(this.sortItems);
        var bodyElem = $.browser.safari || $.browser.chrome ? $("body") : $("html");
        scrollToElementId = scrollToElementId || null;

        if (!this.isProcessed(code)) {
            return;
        }
        sortedItems.forEach(function(element) {
            if (element.code == code) {
                element.isVisible(true);
                //customization 
                if (customer.isLoggedIn()){
                    if(code == 'payment'){
                       return false;
                    }
                }
                //customization end
                bodyElem.animate({scrollTop: $('#' + code).offset().top}, 0, function () {
                    window.location = window.checkoutConfig.checkoutUrl + "#" + code;
                });
                if (scrollToElementId && $('#' + scrollToElementId).length) {
                    bodyElem.animate({scrollTop: $('#' + scrollToElementId).offset().top}, 0);
                }
            } else {
                element.isVisible(false);
            }

        });
    }
}