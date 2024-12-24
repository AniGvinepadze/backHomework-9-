//!ანალოგიურია აქაც
const form = document.querySelector<HTMLFormElement>("form");
const id = location.pathname.split("/")[2];
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    interface Expense {
      name: string;
      age: number;
      height: number;
    }

    const newExpense:Expense = {
      name: form.get("name").value as string,
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
}
