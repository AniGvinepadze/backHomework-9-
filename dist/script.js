"use strict";
// მოგესალმებით თქვენი დავალება შემდეგია:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// უკვე აწყობილ იქსდენსების აპლიაციასში დაამატეთ ejs და შექმენით შემდეგი როუტები.
// 1) /expense-list გამოაჩენეთ ყველა იქსფენსი ქარდების სახით ისევე როგორც ვქენით ლექციაზე. უნდა გქონდეს ქარდში show details და delete
// 2) /expense-list/1 გამოაჩინეთ იქსფენსები დეტალები
// 3) delele ბათონს რო დააწვებით ბექში უნდა გააგზანოთ რექუესთი წაშლის მეთოდით და წაშალოთ ეგ ქარდი.
// 4) create-expense როუტზე უნდა გამოაჩინოთ ფორმა საიდანაც შეძლებთ დაამატოთ ახალი იქსფენსები ისევე როგორც ლექციაზე ვქნით.
// 5) შექმენით ჰედერის და ფუტერის კომპონენტი. ასევე გასტილეთ.
const express = require("express");
const expensesRouter = require("./expenses/expenses.route.js");
const { readFile, writeFile } = require("./utils/fs.js");
// const randomMidlleaware = require("./middleaware/random.middleware.js");
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use("/expenses", expensesRouter);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/expenses-list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expenses = yield readFile("expenses.json", true);
    res.render("pages/expensesList.ejs", { expenses });
}));
app.get("/expenses-list/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("shemovida>");
    const id = Number(req.params.id);
    const expenses = yield readFile("expenses.json", true);
    const expense = expenses.find((e) => e.id === id);
    if (!expense)
        return res.send("expense was not found");
    res.render("pages/expencesDetails.ejs", { expense });
}));
app.get("/create", (req, res) => {
    res.render("pages/createExpenses.ejs");
});
app.get("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const expenses = yield readFile('expenses.json', true);
    const expense = expenses.find(el => el.id === id);
    res.render('pages/updateExpense.ejs', { expense });
}));
app.listen(3002, () => {
    console.log("running on http://localhost:3002");
});
