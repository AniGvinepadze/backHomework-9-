const { readFile, writeFile } = require("../utils/fs");

const getAllExpenses = async (req, res) => {
  const expenses = await readFile("expenses.json", true);
  res.json(expenses);
};

const getExpensesById = async (req, res) => {
  const { id } = Number(req.params.id);
  const expenses = await readFile("expenses.json", true);

  const expense = expenses.find((e) => e.id === id);

  if (!expense) {
    return res.status(400).json({ message: "expense not found" });
  }
  res.json(expense);
};

const createExpenses = async (req, res) => {
  const { name, age, height } = req.body;
  if (!name || !age || !height) {
    return res
      .status(400)
      .json({ message: "name,age and height are required" });
  }
  const expenses = await readFile("expenses.json",true);
  const lastId = expenses[expenses.length - 1]?.id || 0;
  const newExpense = {
    id: lastId + 1,
    name,
    age,
    height,
  };

  expenses.push(newExpense);
  await writeFile("expenses.json",expenses,true);
  res.status(201).json(newExpense);
};

const deleteExpenseById = async (req,res) => {
  const id = Number(req.params.id)
    const expenses = await readFile('expenses.json', true)
    const index = expenses.findIndex(el => el.id === id)
    if(index === -1){
        return res.status(404).json({message: 'expenses not found'})
    }
    const deletedExpense = expenses.splice(index, 1)
    await writeFile('expenses.json', expenses, true)
    res.json(deletedExpense)
}

const updateExpenses = async (req, res) => {
  const { id } = Number(req.params.id);
  const { name, age, height } = req.body;
  // const updExpense = req.body;
  const expenses = await readFile("expenses.json",true);
  const findIndex = expenses.findIndex((e) => e.id === id);
  if (findIndex === -1) {
    return res.status(404).json({ error: "Expense not found" });
  }
  if (name) expenses[findIndex].name = name;
  if (age) expenses[findIndex].age = age;
  if (height) expenses[findIndex].height = height;

  await writeFile("expenses.json",expenses,true);
  res.json(expenses[findIndex])
};

module.exports = {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  deleteExpenseById,
  updateExpenses,
};
