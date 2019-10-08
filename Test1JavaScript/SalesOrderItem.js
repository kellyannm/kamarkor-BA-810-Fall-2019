//Create a module that represents a sales order item. It should have the properties, product, price, quantity, and a function to return the value of the item
//

function SalesOrderItem(product, price, quantity, value) {
  let SalesOrderItem = {};
  SalesOrderItem.product = product;
  SalesOrderItem.quantity = quantity;
  SalesOrderItem.price = price;
  SalesOrderItem.value = value ? value : [];
    SalesOrderItem.value = price * quantity;
  return (product, price, quantity, value)
}
export default SalesOrderItem;
