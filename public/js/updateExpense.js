const form = document.querySelector("form");

const id = location.pathname.split("/")[2];

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newExpense = {
    name: form.name.value,
    age: form.age.value,
    height: form.height.value,
  };
  console.log(newExpense);
  const res = await fetch(`http://localhost:3002/expenses/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExpense),
  });

  //   if (res.status === 200) {
  //     setTimeout(() => {
  //       location.href = "/expenses-list";
  //     }, 1000);
  //   }
  console.log("Current Pathname:", location.pathname);
});
