//grabing the elements
let newToDo = document.getElementById("new-task-description")
let form = document.getElementById('create-task-form')
let listsUl = document.getElementById("tasks")

//best practice to use DOMContentLoaded. ACTUALLY not needed for this lab
document.addEventListener("DOMContentLoaded", () => {
//putting a listener on the form and precneting default refresh
// As a user, I should be able to click some form of a submit button
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  //grabing the discription box ID and add .value to be able to type in it
  // As a user, I should be able to type a task into the input field.
    let value = newToDo.value
  // creat a new elemnt in where you wnat it to show(if not already provided)
    let li = document.createElement("li")
  //very impotant
  //As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated
    li.innerHTML = value
  //append so that it does not float in space
    listsUl.append(li)
  })

});










