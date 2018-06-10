var config = {
'config': {
    'mixins': {
        'Magento_Checkout/js/view/shipping': {
            'Harrigo_RegisterCheckout/js/view/shipping-payment-mixin': true
        },
        'Magento_Checkout/js/view/payment': {
            'Harrigo_RegisterCheckout/js/view/shipping-payment-mixin': true
        }
    }
}
}