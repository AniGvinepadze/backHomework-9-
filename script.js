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

//!

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

const app = express();

const data = [
  { id: 1, name: "ani", age: 18, height: 1.9 },
  { id: 2, name: "nini", age: 23, height: 1.75 },
  { id: 3, name: "gio", age: 21, height: 1.85 },
];




app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs")
app.use("/expenses", expensesRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/expenses-list", (req, res) => {
  res.render("pages/expensesList.ejs", { data });
});


app.get("/expenses.list", (req, res) => {
  const { name, age, height } = req.body;
  const lastId = data[data.length - 1]?.id || 0;
  const newData = {
    id: lastId + 1,
    name,
    height,
    age,
  };
  data.push(newData);
  return res.status(201).json(newData);
});

app.get("/data/:id",(req,res)=>{
  const expense = data.find((e)=> e.id === Number(req.params.id))
  if(!expense) return res.send("expense was not found")
    res.render("pages/expencesDetails.ejs",{data:expense})
})



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
