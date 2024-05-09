"use strict";
let orders = localStorage.getItem("orders")
    ? JSON.parse(localStorage.getItem("orders"))
    : [];
let num = 0;
function placeOrder() {
    let nameInput = document.getElementById("UserName");
    let orderNoInput = document.getElementById("OrderNo");
    let itemsInputs = document.getElementsByClassName("items");
    let costsInputs = document.getElementsByClassName("cost");
    let addressInput = document.getElementById("addr");
    if (nameInput.value === "" ||
        orderNoInput.value === "" ||
        addressInput.value === "") {
        alert("Please fill in all required fields.");
        return;
    }
    for (let i = 0; i < num; i++) {
        let itemInput = itemsInputs[i];
        let costInput = costsInputs[i];
        if (itemInput.value === "" || costInput.value === "") {
            alert("Please fill in all item fields.");
            return;
        }
    }
    let name1 = nameInput.value;
    let orderNo1 = orderNoInput.value;
    let items1 = [];
    let costs1 = [];
    let totalAmount1 = 0;
    for (let i = 0; i <= num; i++) {
        let item1 = itemsInputs[i].value;
        let cost1 = parseInt(costsInputs[i].value);
        items1.push(item1);
        costs1.push(cost1);
        totalAmount1 += cost1;
    }
    let shippingAddress1 = addressInput.value;
    let temp = {
        name: name1,
        orderNo: orderNo1,
        items: items1,
        costs: costs1,
        totalAmount: totalAmount1,
        shippingAddress: shippingAddress1,
    };
    orders.push(temp);
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Order Placed Successfully!!!");
    ToPlaceOrder();
}
function addMore() {
    const addMore = document.getElementById("items");
    const items = document.createElement("input");
    items.setAttribute("class", "items");
    items.setAttribute("type", "text");
    items.setAttribute("required", "true");
    const cost = document.createElement("input");
    cost.setAttribute("class", "cost");
    cost.setAttribute("type", "number");
    cost.setAttribute("required", "true");
    addMore.appendChild(document.createElement("br"));
    addMore.append("Item: ");
    addMore.appendChild(items);
    addMore.append("Cost: ");
    addMore.appendChild(cost);
    num++;
}
//# sourceMappingURL=server.js.map