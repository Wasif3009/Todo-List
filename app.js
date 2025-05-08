const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list-container");
const todoContainer = document.querySelector(".list");

addBtn.addEventListener("click", function () {
  //GETTING INPUT VALUE FROM TEXT BOX
  const task = input.value;

  if (task === "") {
    alert("Enter A Task");
  }

  //CREATING SPAN AND ADDING INPUT TEXT
  const todoMsg = document.createElement("span");
  todoContainer.appendChild(todoMsg);
  todoMsg.textContent = task;
  todoMsg.classList.add("span");

  //CREATING DELETE BUTTON AND ADDING IT TO EACH SPAN THAT WE CREATED
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.classList.add("btn");
  delBtn.textContent = "Del";
  todoMsg.appendChild(delBtn);

  //ONCLICK OF DELETE BUTTON REMOVING SPECIFIC ELEMENT FROM THE DOM
  delBtn.addEventListener("click", () => {
    todoMsg.remove();
  });

  input.value = "";
});

//DONE WITH TODO LIST NEXT DO IT FULLY BY OWN
//THATS IT NOTHING CRAZY
