"use strict";
function invoice() {
    let orders = localStorage.getItem("orders")
        ? JSON.parse(localStorage.getItem("orders"))
        : [];
    let orderNo = document.getElementById("OrderNo").value;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderNo === orderNo) {
            let head = `<table border=1>
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
            let body = ``;
            for (let j = 0; j < orders[i].items.length; j++) {
                let str = `<tr>
              <td>${orders[i].items[j]}</td>
              <td>${orders[i].costs[j]}</td>
              </tr>`;
                body += str;
            }
            let foot = `<tr>
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
//# sourceMappingURL=invoice.js.map