const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  deleteExpense,
  updateExpenses,
} = require("./expenses.service.js");
const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpensesById);
expensesRouter.post("/", createExpenses);
expensesRouter.put("/:id", updateExpenses);
expensesRouter.delete("/:id", deleteExpense);
module.exports = expensesRouter;
