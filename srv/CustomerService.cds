using { btp.starterkit as stk } from '../db/schema';

@requires: ['customer']
service CustomerService {

    entity Customers as projection on stk.Customers;

    entity Orders @(restrict: [{
        grant: '*', // for the sake of simplicity let's allow all actions
        where: 'customer.email = $user' // we want to use user login (for default identity provider it's email)
    }]) as projection on stk.Orders
        actions {
            action cancel() returns Boolean;
        };

    type CancelledOrder {
        ID: UUID;
        changed: Boolean;
    };

    type StatusCount :{
        status: stk.OrderStatus;
        count: Integer;
    };

    function getOrdersReport() returns array of StatusCount;
};


