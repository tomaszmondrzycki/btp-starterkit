using { btp.starterkit as stk } from '../db/schema';

@requires: ['customer']
service CustomerService {

    entity Customers as projection on stk.Customers;

    entity Orders        as projection on stk.Orders
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


