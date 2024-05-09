type Order = {
  name: string;
  orderNo: string;
  items: string[];
  costs: number[];
  totalAmount: number;
  shippingAddress: string;
};

let orders: Order[] = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders")!)
  : [];
let num = 0;

function placeOrder() {
  let nameInput: HTMLInputElement = document.getElementById(
    "UserName"
  ) as HTMLInputElement;
  let orderNoInput: HTMLInputElement = document.getElementById(
    "OrderNo"
  ) as HTMLInputElement;
  let itemsInputs: HTMLCollectionOf<Element> =
    document.getElementsByClassName("items");
  let costsInputs: HTMLCollectionOf<Element> =
    document.getElementsByClassName("cost");
  let addressInput: HTMLTextAreaElement = document.getElementById(
    "addr"
  ) as HTMLTextAreaElement;

  // Check if any required fields are empty
  if (
    nameInput.value === "" ||
    orderNoInput.value === "" ||
    addressInput.value === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Check if any item fields are empty
  for (let i = 0; i < num; i++) {
    let itemInput: HTMLInputElement = itemsInputs[i] as HTMLInputElement;
    let costInput: HTMLInputElement = costsInputs[i] as HTMLInputElement;

    if (itemInput.value === "" || costInput.value === "") {
      alert("Please fill in all item fields.");
      return;
    }
  }

  // Proceed with placing the order
  let name1: string = nameInput.value;
  let orderNo1: string = orderNoInput.value;
  let items1: string[] = [];
  let costs1: number[] = [];
  let totalAmount1 = 0;

  for (let i = 0; i <= num; i++) {
    let item1: string = (itemsInputs[i] as HTMLInputElement).value;
    let cost1: number = parseInt((costsInputs[i] as HTMLInputElement).value);
    items1.push(item1);
    costs1.push(cost1);
    totalAmount1 += cost1;
  }

  let shippingAddress1: string = addressInput.value;

  let temp: Order = {
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
  const addMore = document.getElementById("items") as HTMLInputElement;
  const items = document.createElement("input");
  items.setAttribute("class", "items");
  items.setAttribute("type", "text");
  items.setAttribute("required", "true"); // Make the field mandatory
  const cost = document.createElement("input");
  cost.setAttribute("class", "cost");
  cost.setAttribute("type", "number");
  cost.setAttribute("required", "true"); // Make the field mandatory
  addMore.appendChild(document.createElement("br"));
  addMore.append("Item: ");
  addMore.appendChild(items);
  addMore.append("Cost: ");
  addMore.appendChild(cost);
  num++;
}
