const { Router } = require("express");
const fs = require("fs/promises");
const filePath = "expenses.json";

const readFile = async () => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const writeFile = async () => {
  await fs.writeFile(filePath, JSON.stringify([], null, 2));
};

const getAllExpenses = async (req, res) => {
  const { page = 1, take = 20 } = req.query;
  const expenses = await readFile();

  const startIndex = (page - 1) * take;
  const pagExpenses = expenses.slice(startIndex, startIndex + Number(take));
  const lastId = expenses[expenses.length - 1]?.id || 0;

  const newExpenses = {
    id: lastId + 1,
    data: pagExpenses,
    total: expenses.length,
    page: Number(page),
    take: Number(take),
  };

  return res.status(200).json(newExpenses);
};
//! მოკლედ აქ მეუბნება რომ expenses not found
//! expenses/3 ამ როუთზე

const getExpensesById = async (req, res) => {
  const { id } = Number(req.params.id);
  const expenses = await readFile();

  const expense = expenses.find((e) => e.id === Number(id));

  if (!expense) {
    return res.status(400).json({ message: "expense not found" });
  }
  res.json(expense);
};

//! აქ მაქვს ესეთი რამ ჩვეულბრივ expenses-ში რო მაქვს მაგალითად სამი ობიექტი როგორც კი postში ახალ რამეს შევქმნი ეგრევე იშლება ყველაფერი

const createExpenses = async (req, res) => {
  const { fullName, eyeColor, email } = req.body;

  if (!fullName || !eyeColor || !email) {
    return res
      .status(400)
      .json({ message: "fullName,eyeColor and email are required" });
  }
  const expenses = await readFile();
  const lastId = expenses[expenses.length - 1]?.id || 0;
  const newExpense = {
    id: lastId + 1,
    fullName,
    eyeColor,
    email,
  };

  expenses.push(newExpense);
  await writeFile(expenses);
  res.status(201).json(newExpense);
};

const updateExpenses = async () => {
  const { id } = req.params;
  const updExpense = req.body;
  const expenses = await readFile();
  const findIndex = expenses.findIndex((e) => e.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ error: "Expense not found" });
  }
  expenses[index].fullName = updExpense.fullName;
  expenses[index].eyeColor = updExpense.eyeColor;
  expenses[index].email = upd.email;

  await writeFile(expenses);
  res.json(expenses[index]);
};
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  const expenses = await readFile();
  const findIndex = expenses.findIndex((e) => e.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Expense not found" });
  }

  const deletedExpense = expenses.splice(index, 1);
  await writeFile(expenses);

  res.json(deletedExpense);
};

module.exports = {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
  deleteExpense
};