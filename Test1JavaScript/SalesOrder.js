//Create a module that represents a sales order that has the properties customer, sales tax rate, and an array of items. It should have a function to return the value of the items (sum the item price times quantity) and a function that returns total value (sum of the value of the items plus the sales tax)
import.SalesOrderItem;

function SalesOrder(customer, tax, items) {
  let SalesOrder = {};
  SalesOrder.customer = customer;
  SalesOrder.tax = tax;
  SalesOrder.items = items ? items : [];

   SalesOrder.addSalesOrder = function () {
     SalesOrder.SalesOrderItem.push(SalesOrderItems);
   }
   return (customer, tax, items)
}
export default SalesOrder;



