//!ვერც აქ ვხვდები რაუნდა

const form = document.querySelector<HTMLFormElement>("form");
if (!form) throw new Error("Form not found");
const id = location.pathname.split("/")[2];
if (!id) throw new Error("Id not found in the location");
if (form) {
  form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    interface Expense {
      name: string;
      age: number;
      height: number;
    }

    const newExpense: Expense = {
      name: form.get("name").value as string,
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
  });
}
