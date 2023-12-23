const todolist=[{name:"watch youtube", dueDate:"2023-12-22"}]

showTodolist();

function showTodolist(){
    let todolistHTML='';
    todolist.forEach((todoObject, index) => { 
        const {name,dueDate} = todoObject;
        const html=`
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-td-button">Delete</button>
        `;
        todolistHTML += html
    });

    document.querySelector('.js-display-td').innerHTML=todolistHTML;

    document.querySelectorAll('.js-delete-td-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1);
            showTodolist();
        });
    });
}

document.querySelector('.js-add-td-button').addEventListener('click',() => {
    addTodo();
})

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dueDate = document.querySelector('.js-due-date-input').value;
    todolist.push({name,dueDate});

    inputElement.value='';
    
    showTodolist();
}
