// მოგესალმებით თქვენი დავალება შემდეგია:

// უკვე აწყობილ იქსდენსების აპლიაციასში დაამატეთ ejs და შექმენით შემდეგი როუტები.

// 1) /expense-list გამოაჩენეთ ყველა იქსფენსი ქარდების სახით ისევე როგორც ვქენით ლექციაზე. უნდა გქონდეს ქარდში show details და delete
// 2) /expense-list/1 გამოაჩინეთ იქსფენსები დეტალები
// 3) delele ბათონს რო დააწვებით ბექში უნდა გააგზანოთ რექუესთი წაშლის მეთოდით და წაშალოთ ეგ ქარდი.
// 4) create-expense როუტზე უნდა გამოაჩინოთ ფორმა საიდანაც შეძლებთ დაამატოთ ახალი იქსფენსები ისევე როგორც ლექციაზე ვქნით.
// 5) შექმენით ჰედერის და ფუტერის კომპონენტი. ასევე გასტილეთ.

const express = require("express");
const expensesRouter = require("./expenses/expenses.route.js");
const randomMidlleaware = require("./middleaware/random.middleware.js");
const fs = require("fs/promises");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/expenses", expensesRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
const readFile = async () => {
  const data = await fs.readFile("expenses.json", "utf-8");
  return JSON.parse(data);
};
app.get("/expenses-list", async (req, res) => {
  // const list =  awiat getAllExpenses()
  const expenses = await readFile();
  res.render("pages/expensesList.ejs", { expenses });
});

app.get("/expenses-list/:id", async (req, res) => {
  console.log("shemovida>");
  const expenses = await readFile();
  const expense = expenses.find((e) => e.id === Number(req.params.id));
  if (!expense) return res.send("expense was not found");
  res.render("pages/expencesDetails.ejs", { expenses: expense });
});

app.get("/create", (req, res) => {
  res.render("pages/createExpenses.ejs");
});

app.get("/random", randomMidlleaware, (req, res) => {
  res.status(200).send("request passed through random midlleware");
});
app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
