const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  deleteExpenseById,
  updateExpenses,
} = require("./expenses.service.js");

// // const isAdminMiddleaware = require("../middleaware/isAdmin.middleaware.js");
// const validateMidlleware = require("../middleaware/validate.middleaware.js");
// const deleteExpense = require("../public/js/deleteExpense.js");

const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpensesById);
expensesRouter.post("/", createExpenses);
expensesRouter.delete("/:id", deleteExpenseById);
expensesRouter.put("/:id", updateExpenses);

module.exports = expensesRouter;
