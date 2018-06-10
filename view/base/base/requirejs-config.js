var config = {
'config': {
    'mixins': {
        'Magento_Checkout/js/view/shipping': {
            'Harrigo_CrosssellCheckout/js/view/shipping-payment-mixin': true
        },
        'Magento_Checkout/js/view/payment': {
            'Harrigo_CrosssellCheckout/js/view/shipping-payment-mixin': true
        }
    }
}
}