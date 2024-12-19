// თქვენი დავალება შემდეგია:
// 1) შექმენით ხარჯების(expenses) CRUD ექსპრესის გამოყენებით.
// 2) დაამტეთ ფეჯინეიშენი, /expenses?page=1&take=20
// 3) იქსფენსის წაშლა უნდა შეეძლოს მხოლოდ ისეთ იუზერებს ვინც ჰედერში რაიმე სახის key-ს გამოგატანთ. req.headers.key აი აქ იქნება ის ფროფერთი რასაც გამოატანთ. ეგ ფროფერთი პოსტმენიდან ჰედერების განყოფილებიდან გამოატანეთ.
// 4) გაჰენდლეთ ერორები. თუ ვერ იპოვა თუ ვერ წაშალა შესაბამისი ერორები დაუწერეთ ისევე როგორც ლექციაზე ვქენით.
// უნდა გამოიყენოთ fs module, express js. იქსფენსების ინფორმაცია უნდა ინახებოდეს expenses.json ფაილში.

//!

// მე-9 დავალებას იქსფენსების აპლიკაციას დაამატებთ შემდეგ ფუნცქიონალს.

// 1) გააკეთეთ როუტები და დააჯგუფეთ ერთად.
// 2) თითეულ როუტს გაუკეთეთ თავისი სერვისი
// 3) დაწერეთ მიდლვიარი რომელსაც დაადებთ წაშლის როუტს და არ წაშლის მანამ სანამ რაიმე კონკრეტულ ქის არ გადასცემთ ჰედერში.
// 4) შექმნით მიდლვიარი რომელიც შეამოწმებს იქსფენსის დამატების დროს თუ მოყვება ყველა აუცილებელი(required) ფილდი თუ არადა დააბრუნოს მიდლვიარმა 400 სტატუს კოდი
// 5) შექმენით ახალი როუტი /random რომელიც რექუესთების ნახევარს გაატარებს ხოლო ნახევარს არ გაატარებს შეგიძლიათ გამოიყენოთ Math.random() მეთოდი. თუ გაატარა რექუესთი დააბრუნოს რაიმე ტექსტი.

const express = require("express");
const expensesRouter = require("./expenses/expenses.route.js");
const randomMidlleaware = require("./middleaware/random.middleware.js");

const app = express();
app.use(express.json());
app.use("/expenses", expensesRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/random", randomMidlleaware, (req, res) => {
  res.status(200).send("request passed through random midlleware");
});
app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});



// const users = [
//     { id: 1, firstName: "levani", lastName: "Shengelia", age: 16 },
//     { id: 2, firstName: "beka", lastName: "Shengelia", age: 20 },
//   ];
