using { btp.starterkit as stk } from '../db/schema';
using { btp.starterkit.OrderStatus}
service CustomerService {

    entity Customers as projection on stk.Customers;

    entity Orders as projection on stk.Orders;

    type StatusCount :{
        status: OrderStatus;
        count: Integer;
    };

    function getOrdersReport() returns array of StatusCount;
};


