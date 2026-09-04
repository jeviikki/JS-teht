// Sample expenses array
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transportation", amount: 30 },
  { category: "Entertainment", amount: 20 }
];

function calculateTotalExpenses(expenses) {
  const total = expenses.reduce((currentValue, stack) => stack.amount + currentValue, 0);
  return total
}

// Test the calculateTotalExpenses function
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses);

// Output should be:
// 100