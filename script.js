// თქვენი დავალება შემდეგია:
// 1) შექმენით ხარჯების(expenses) CRUD ექსპრესის გამოყენებით.
// 2) დაამტეთ ფეჯინეიშენი, /expenses?page=1&take=20
// 3) იქსფენსის წაშლა უნდა შეეძლოს მხოლოდ ისეთ იუზერებს ვინც ჰედერში რაიმე სახის key-ს გამოგატანთ. req.headers.key აი აქ იქნება ის ფროფერთი რასაც გამოატანთ. ეგ ფროფერთი პოსტმენიდან ჰედერების განყოფილებიდან გამოატანეთ.
// 4) გაჰენდლეთ ერორები. თუ ვერ იპოვა თუ ვერ წაშალა შესაბამისი ერორები დაუწერეთ ისევე როგორც ლექციაზე ვქენით.
// უნდა გამოიყენოთ fs module, express js. იქსფენსების ინფორმაცია უნდა ინახებოდეს expenses.json ფაილში.

const express = require("express");
const expensesRouter = require("./expenses/expenses.route.js");

const app = express();
app.use(express.json());
app.use("/expenses", expensesRouter);

// app.get("/expenses", getAllExpenses);
// app.get("/expenses/:id", getExpensesById);

// app.post("/expenses", createExpenses);
// app.put("/expenses/:id",updateExpenses)
// app.delete("epenses/:id",deleteExpense)
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});



// const users = [
//     { id: 1, firstName: "levani", lastName: "Shengelia", age: 16 },
//     { id: 2, firstName: "beka", lastName: "Shengelia", age: 20 },
//   ];
