let prioritySelector = document.querySelector("#priority")
let form = document.querySelector("#create-task-form")
let theList = document.querySelector("#tasks")
let priorityHigh = 'High', priorityMedium = 'Medium', priorityLow = 'Low'
form.addEventListener("submit", (iceCream) => {
   iceCream.preventDefault()
   let result = iceCream.target["new-task-description"].value
   let newTask = document.createElement("li")
   let deleteBtn = document.createElement("button")
   let chosenPriority = iceCream.target['priority-list'].value
   deleteBtn.innerText = 'X'
   newTask.innerText = `${result} `
   newTask.style.color = chosenPriority
   newTask.append(deleteBtn)
   deleteBtn.addEventListener('click', () => {
      newTask.remove()
   })
   theList.append(newTask)
})