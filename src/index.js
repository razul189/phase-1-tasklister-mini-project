document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    handleTask(e.target['new-task-description'].value)
  })
})

function handleTask(task){
  let p = document.createElement('p')
  console.log(p)
  p.textContent = task
  document.querySelector('#list').appendChild(p)
}
