const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
} = require("./expenses.service.js")

// const isAdminMiddleaware = require("../middleaware/isAdmin.middleaware.js");
const validateMidlleware = require("../middleaware/validate.middleaware.js");
const deleteExpense = require("../public/js/deleteExpense.js");

const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpensesById);
expensesRouter.post("/", validateMidlleware, createExpenses);
expensesRouter.put("/:id", validateMidlleware, updateExpenses);
expensesRouter.delete("/:id",deleteExpense)

module.exports = expensesRouter;
