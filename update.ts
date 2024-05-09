function update() {
  type order = {
    name: string;
    orderNo: string;
    items: string[];
    costs: number[];
    totalAmount: number;
    shippingAddress: string;
  };
  let orders: order[] = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders")!)
    : [];
  let orderNo = (document.getElementById("OrderNo") as HTMLInputElement).value;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].orderNo === orderNo) {
      orders[i].shippingAddress = (
        document.getElementById("addr") as HTMLInputElement
      ).value;
      alert("Address Updated Successfully");
      localStorage.setItem("orders", JSON.stringify(orders));
      ToUpdate();
    }
  }
  alert("No Order No. found!!");
}
