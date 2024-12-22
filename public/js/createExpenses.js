const form = document.querySelector("form");
const id = location.pathname.split("/")[2];
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newExpense = {
    name: form.name.value,
    age: form.age.value,
    height: form.height.value,
  };

  const res = await fetch("http://localhost:3002/expenses", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExpense),
  });
  if (res === 201) {
    form.category.value = "";
    form.price.value = "";
    location.href = "/expenses-list";
  }
});
