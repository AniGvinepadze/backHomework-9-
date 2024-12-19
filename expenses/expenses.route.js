const { Router } = require("express");
const {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  deleteExpense,
  updateExpenses,
} = require("./expenses.service.js");
const isAdminMiddleaware = require("../middleaware/isAdmin.middleaware.js");
const validateMidlleware = require("../middleaware/validate.middleaware.js");
// const randomMidlleaware = require("../middleaware/random.middleware.js");
const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/:id", getExpensesById);
expensesRouter.post("/", validateMidlleware, createExpenses);
expensesRouter.put("/:id", validateMidlleware, updateExpenses);
expensesRouter.delete("/:id", isAdminMiddleaware, deleteExpense);
// expensesRouter.get("/random", randomMidlleaware, (req, res) => {
//   res.status(200).send("request passed through random midlleware");
// });

module.exports = expensesRouter;
