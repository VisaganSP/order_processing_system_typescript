"use strict";
function update() {
    let orders = localStorage.getItem("orders")
        ? JSON.parse(localStorage.getItem("orders"))
        : [];
    let orderNo = document.getElementById("OrderNo").value;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderNo === orderNo) {
            orders[i].shippingAddress = document.getElementById("addr").value;
            alert("Address Updated Successfully");
            localStorage.setItem("orders", JSON.stringify(orders));
            ToUpdate();
        }
    }
    alert("No Order No. found!!");
}
//# sourceMappingURL=update.js.map