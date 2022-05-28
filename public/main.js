const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

// req come from main.js, res from server
update.addEventListener('click', _ => {
  const updatedDream = document.querySelector('#updateBox').value
  const updatedDate = document.querySelector('#updatedDate').value
  fetch('/updateDream', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: updatedDate,
      dream: updatedDream
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})

deleteButton.addEventListener('click', _ => {
  const deleteInput = document.querySelector('#deleteInput').value
    console.log(deleteInput)

  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: deleteInput
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(data => {
      window.location.reload()
    })
})

