namespace btp.starterkit;

using { cuid, managed } from '@sap/cds/common';

entity Customers: cuid, managed {
    name    : String(255);
    email   : String(255);
    active  : Boolean;
    orders : Association to many Orders on orders.customer = $self;
};

// db/schema.cds

entity Orders : cuid, managed {
    status        : OrderStatus;
    delivery_date : Date;
    cost          : Decimal(10, 2);
    customer : Association to one Customers;
};

type OrderStatus : Integer enum {
    NEW       = 0;
    PROCESSED = 1;
    SHIPPED   = 2;
    DELIVERED = 3;
    CANCELLED = -1;
};