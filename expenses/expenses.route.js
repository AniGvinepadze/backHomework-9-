const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpenses,
} = require("./expenses.service.js");
const expensesRouter = Router();

expensesRouter.get("/expenses", getAllExpenses);
expensesRouter.get("/expenses/:id", getExpensesById);
expensesRouter.post("/expenses", createExpenses);

module.exports = expensesRouter;
