const orders = [
  {
    id: 1,
    user: "Ivan",
    items: [
      { name: "Laptop", price: 1200, qty: 1 },
      { name: "Mouse", price: 25, qty: 2 }
    ],
    status: "pending",
    createdAt: "2026-04-28"
  },
  {
    id: 2,
    user: "Anna",
    items: [
      { name: "Phone", price: 800, qty: 1 }
    ],
    status: "completed",
    createdAt: "2026-04-20"
  },
  {
    id: 3,
    user: "Ivan",
    items: [
      { name: "Keyboard", price: 100, qty: 1 }
    ],
    status: "pending",
    createdAt: "2026-04-29"
  }
];

function calculateOrderTotal(order) {
  return order.items.reduce((total, item) => total + (item.price * item.qty), 0);
}

function getUserPendingOrders(orders, username) {
  return orders.filter(order => order.user === username && order.status === "pending");
}

function getTotalRevenue(orders) {
  return orders
    .filter(order => order.status === "completed")
    .reduce((total, order) => total + calculateOrderTotal(order), 0);
}

function groupOrdersByUser(orders) {
  return orders.reduce((groups, order) => {
    const user = order.user;
    if (!groups[user]) {
      groups[user] = [];
    }
    groups[user].push(order);
    return groups;
  }, {});
}

function getTopUsers(orders, topN) {
  const userStats = orders.reduce((acc, order) => {
    if (!acc[order.user]) {
      acc[order.user] = 0;
    }
    if (order.status === "completed") {
      acc[order.user] += calculateOrderTotal(order);
    }
    return acc;
  }, {});

  return Object.keys(userStats)
    .map(user => ({ user, total: userStats[user] }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN);
}