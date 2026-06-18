sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"btp/starterkit/customer/test/integration/pages/CustomersList",
	"btp/starterkit/customer/test/integration/pages/CustomersObjectPage",
	"btp/starterkit/customer/test/integration/pages/OrdersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage, OrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('btp/starterkit/customer') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage,
			onTheOrdersObjectPage: OrdersObjectPage
        },
        async: true
    });

    return runner;
});

