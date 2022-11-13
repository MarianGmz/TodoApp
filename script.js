import checkComplete from "./componentes/checkComplete.js"
import deleteIcon from "./componentes/deleteIcon.js"

( () => {
 
  const btn = document.querySelector("[data-form-btn]")
  const texto = document.querySelector(".inputForm")


  const createTask = (evento) => {
      evento.preventDefault()

      const value = texto.value
      texto.value = ""
      const list = document.querySelector("[data-list]")
      const task = document.createElement("li")
      task.classList.add("card")

      const taskContent = document.createElement("div")
      
      const titleTask = document.createElement("span")
      titleTask.classList.add("task")
      titleTask.innerText = value
      taskContent.appendChild(checkComplete())
      taskContent.appendChild(titleTask)
  

      

      task.appendChild(taskContent)
      task.appendChild(deleteIcon())
      list.appendChild(task)
  }




  btn.addEventListener("click",createTask)



  
})()