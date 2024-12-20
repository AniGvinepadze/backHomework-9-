// const deleteExpense = async (req, res) => {
//   const { id } = req.params;
//   const expenses = await readFile();
//   const findIndex = expenses.findIndex((e) => e.id === parseInt(id));

//   if (findIndex === -1) {
//     return res.status(404).json({ error: "Expense not found" });
//   }

//   const deletedExpense = expenses.splice(findIndex, 1);
//   await writeFile(expenses);
//   res.json(deletedExpense);
// };

// const deleteExpense = async () => {
//   const deleteButtons = document.querySelectorAll(".btn");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", async (e) => {
//       const cardId = e.target.id; 
//       try {
//         const res = await fetch(`http://localhost:3000/expenses/data/${cardId}`,//! 
//           {
//           method: "DELETE",
//         });
//         if (res.ok) {
//           alert('Expense deleted successfully');
//           window.location.reload(); 
//         } else {
//           alert('Error deleting expense');
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     });
//   });
// };

module.exports = deleteExpense()
