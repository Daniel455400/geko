const transactions = [
    { id: "T001", info: "  apple.com/bill  ", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T002", info: "Sberbank Transfer", amount: "5000.00 RUB", date: "2023-10-01" },
    { id: "T003", info: "APPLE.COM/BILL", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T004", info: " Netflix Subscription ", amount: "15.99 USD", date: "2023-10-02" },
    { id: "T005", info: "Amazon Web Services", amount: "450.00 USD", date: "2023-10-03" },
    { id: "T006", info: "Apple.com/bill", amount: "30.00 USD", date: "2023-10-04" }
];

let cleanData = transactions.map(t => {
    let parts = t.amount.split(" ");
    let val = parseFloat(parts[0]);
    let curr = parts[1];

    if (curr === "RUB") {
        val = parseFloat((val / 90).toFixed(2));
        curr = "USD";
    }

    return {
        ...t,
        info: t.info.trim().toLowerCase(),
        amount: { value: val, currency: curr }
    };
});

cleanData = cleanData.filter((item, index, self) => 
    index === self.findIndex((t) => (
        t.info === item.info && 
        t.amount.value === item.amount.value && 
        t.date === item.date
    ))
);

const grouped = cleanData.reduce((acc, curr) => {
    if (!acc[curr.info]) acc[curr.info] = [];
    acc[curr.info].push(curr);
    return acc;
}, {});

const totalSum = cleanData.reduce((sum, t) => sum + t.amount.value, 0);

console.log("Մաքրված տվյալներ:", cleanData);
console.log("Խմբավորված:", grouped);
console.log("Ընդհանուր գումարը (USD):", totalSum.toFixed(2));