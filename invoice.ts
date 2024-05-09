function invoice() {
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
      let head: string = `<table border=1>
          <tr>
          <th colspan=2 >Name: ${orders[i].name}</th>
          </tr>
          <tr>
          <th colspan=2 >Order No.: ${orders[i].orderNo}</th>
          </tr>
          <tr>
          <td>Address:</td>
          <td>${orders[i].shippingAddress}</td>
          </tr>
          <tr>
          <th >Items</th>
          <th>Cost</th>
          </tr>`;
      let body: string = ``;
      for (let j = 0; j < orders[i].items.length; j++) {
        let str: string = `<tr>
              <td>${orders[i].items[j]}</td>
              <td>${orders[i].costs[j]}</td>
              </tr>`;
        body += str;
      }
      let foot: string = `<tr>
          <td>Total Amount</td>
          <td>${orders[i].totalAmount}</td>
          </tr></table>`;
      let table = document.getElementById("display");
      if (table) {
        table.innerHTML = head + body + foot;
      }
    }
  }
}
