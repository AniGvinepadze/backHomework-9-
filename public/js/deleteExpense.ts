
async function deleteExpense(id:number){
  const res = await fetch(`http://localhost:3002/expenses/${id}`, {
      method: 'DELETE'
  })
  if(res.status === 200){
      location.reload()
  }
}

