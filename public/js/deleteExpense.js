
const fs = require("fs/promises");
const readFile = async () => {
  const data = await fs.readFile("expenses.json", "utf-8");
  return JSON.parse(data);
};
const writeFile = async () => {
  await fs.writeFile(filePath, JSON.stringify([], null, 2));
};
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const expenses = await readFile();
  const findIndex = expenses.findIndex((e) => e.id === parseInt(id));

  if (findIndex === -1) {
    return res.status(404).json({ error: "Expense not found" });
  }

  const deletedExpense = expenses.splice(findIndex, 1);
  await writeFile(expenses);
  res.json(deletedExpense);
};

module.exports = deleteExpense;
