let orders = [
    "001: Alice",
    "002: Bob",
    "003: Charlie",
    "004: David",
    "005: Eve"
  ];
  
  let newOrder1 = "006: Frank";
  let newOrder2 = "007: Grace";
  let newOrder3 = "008: Hannah";
  
  orders[5] = newOrder1;
  orders[6] = newOrder2;
  orders[7] = newOrder3;
  
  orders[0] = ""; // Remove the first order
  orders[1] = ""; // Remove the second order
  
  function processOrders(queue) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] !== "") {
        let splitIndex = queue[i].indexOf(":");
        let orderID = "";
        for (let j = 0; j < splitIndex; j++) {
          orderID += queue[i][j];
        }
        let customerName = "";
        for (let k = splitIndex + 1; k < queue[i].length; k++) {
          customerName += queue[i][k];
        }
        console.log("Processing " + orderID + " for " + customerName);
      }
    }
  }
  
  processOrders(orders);
  
  console.log("Final queue after processing:");
  
  let longestName = "";
  for (let i = 0; i < orders.length; i++) {
    if (orders[i] !== "") {
      let splitIndex = orders[i].indexOf(":");
      let customerName = "";
      for (let k = splitIndex + 1; k < orders[i].length; k++) {
        customerName += orders[i][k];
      }
      if (customerName.length > longestName.length) {
        longestName = customerName;
      }
    }
  }
  
  console.log("Customer with the longest name is: " + longestName);
  