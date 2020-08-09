//selector
const Input = document.querySelector(".input");
const Button = document.querySelector(".button");
const List = document.querySelector(".list");

// arrow function addCrud
const addCrud = (event) =>{
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
// menambah li
    const newCrud = document.createElement('li');
    newCrud.innerText = Input.value;
    newCrud.classList.add('todo-item');
    todoDiv.appendChild(newCrud);
// menambhakan crud ke local storage
    saveCrud(Input.value);

// ceklis button
    const compliteButton = document.createElement('button');
    compliteButton.innerHTML = `<i class="fas fa-check"></i>`;
    compliteButton.classList.add("complite-btn");
    todoDiv.appendChild(compliteButton);
// hapus button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
// append 
    List.appendChild(todoDiv);
    //clear input value
    Input.value = "";
}
Button.addEventListener('click', addCrud);



const deleteCheck = (e) => {
   const item = e.target;
   // delete
   if(item.classList[0] === 'trash-btn'){
       const todo = item.parentElement;
       todo.classList.add("fall");
       todo.remove();
   }
   // mark list
   if(item.classList[0] === "complite-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("complited");
    }
}
List.addEventListener('click', deleteCheck);

const saveCrud = (crud) => {
    let crudValue;
    if(localStorage.getItem("crudValue") === null){
        crudValue = [];
    }else{
        crudValue = JSON.parse(localStorage.getItem("crudValue"));
    }

    crudValue.push(crud);
    localStorage.setItem("crudValue", JSON.stringify(crudValue));
}

