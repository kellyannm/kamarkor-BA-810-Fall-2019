
//SalesOrderItem.value = SalesOrderItems[] * SalesOrder.tax * SalesOrderItem.price * salesOrderItem.quantity
//SalesOrderItem.Value = SalesOrderItem.value
//console.log(salesOrderItem.value)

//test values are widget 10 2.50
//                gidget 20 1
// tax rate .10 and total value = 49.50


import SalesOrderItem from './SalesOrderItem';

let Sales1 = new Sale('Widget');
Sales1.addQuantity(10);
Sales1.addPrice(2.50);
Sales1.addValue(quantity * price);

Console.log(Sales1.addValue);

let Sales2 = new Sale('Gidget');
Sales2.addQuantity(20);
Sales2.addPrice(1.00);
Sales2.addValue(quantity*price)

Console.log(Sales2.addValue);
Console.Log(SalesOrderItem);

import SalesOrder from '/SalesOrder';

Sales1 = newSale('Widget');
Sales1.addTax = addTax(1.1);

Sales2 = newSale('Gidget');
Sales1.addTax = -addTax(1.1);

Console.log(SalesOrder);
Console.log(Sales1.addValue * Sales1.addTax);
Console.log(sales2.addValue * Sales12.addTax);

