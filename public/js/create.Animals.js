const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const expense = {
    name: form.name.value,
    age: form.age.value,
    height: form.height.value,
  };

  const res = await fetch("http://localhost:3000/expenses-list", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  if (res === 201) {
    location.href = "/expenses-list";
  }
  console.log(expense,"expense")
});
