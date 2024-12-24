// მოგესალმებით თქვენი დავალება შემდეგია:

// უკვე აწყობილ იქსდენსების აპლიაციასში დაამატეთ ejs და შექმენით შემდეგი როუტები.

// 1) /expense-list გამოაჩენეთ ყველა იქსფენსი ქარდების სახით ისევე როგორც ვქენით ლექციაზე. უნდა გქონდეს ქარდში show details და delete
// 2) /expense-list/1 გამოაჩინეთ იქსფენსები დეტალები
// 3) delele ბათონს რო დააწვებით ბექში უნდა გააგზანოთ რექუესთი წაშლის მეთოდით და წაშალოთ ეგ ქარდი.
// 4) create-expense როუტზე უნდა გამოაჩინოთ ფორმა საიდანაც შეძლებთ დაამატოთ ახალი იქსფენსები ისევე როგორც ლექციაზე ვქნით.
// 5) შექმენით ჰედერის და ფუტერის კომპონენტი. ასევე გასტილეთ.

import express, { Express, Request, Response } from "express";


const expensesRouter = require("./expenses/expenses.route.js");
const {readFile,writeFile} = require("./utils/fs.js")
// const randomMidlleaware = require("./middleaware/random.middleware.js");

const app:Express = express();

app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use("/expenses", expensesRouter);

app.get("/", (req:Request, res:Response) => {
  res.send("hello world");
});

app.get("/expenses-list", async (req:Request, res:Response) => {
  const expenses = await readFile("expenses.json", true);
  res.render("pages/expensesList.ejs", { expenses });
});
interface Expense {
  id: number;
  title: string; 
  amount: number;
  date: string;
}

//! აქ ვერ ვხვდები რატო აწითლებს
app.get("/expenses-list/:id", async (req:Request, res:Response) => {
  console.log("shemovida>");
  const id = Number(req.params.id);
  const expenses:Expense[] = await readFile("expenses.json", true);
  const expense = expenses.find((e) => e.id === id);
  if (!expense) return res.send("expense was not found");
  res.render("pages/expencesDetails.ejs", { expense });
});

app.get("/create", (req:Request, res:Response) => {
  res.render("pages/createExpenses.ejs");
});

app.get("/update/:id",async(req:Request,res:Response)=>{
  const id = Number(req.params.id)
  const expenses:Expense[] = await readFile('expenses.json', true)
  const expense = expenses.find(el => el.id === id)
    res.render('pages/updateExpense.ejs', {expense})
})



app.listen(3002, () => {
  console.log("running on http://localhost:3002");
});
