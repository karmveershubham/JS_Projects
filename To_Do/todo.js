let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

showTodolist();

function showTodolist(){
    let todolistHTML='';
    todolist.forEach((todoObject, index) => { 
        const {name,dueDate} = todoObject;
        const html=`
            <div class="name-display">${name}</div>
            <div class="due-date-display">${dueDate}</div>
            <button class="delete-td-button js-delete-td-button">Delete</button>
        `;
        todolistHTML += html
    });

    document.querySelector('.js-display-td').innerHTML=todolistHTML;

    document.querySelectorAll('.js-delete-td-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1);
            localStorage.setItem('todolist', JSON.stringify(todolist));
            showTodolist();
        });
    });
}

document.querySelector('.js-add-td-button').addEventListener('click',() => {
    addTodo();
});
document.querySelector('.js-add-td-button').removeEventListener('click',null);
document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        addTodo();
    }
});



function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const inputDueDate=document.querySelector('.js-due-date-input')
    const dueDate = inputDueDate.value;

    document.querySelector('.js-add-td-button').removeEventListener('click', null);

    if(name==='' || dueDate===''){
        alert("Enter Task And Date!");
    }else{
        todolist.push({name,dueDate});
        localStorage.setItem('todolist', JSON.stringify(todolist));
        inputElement.value='';
        inputDueDate.value='';
        showTodolist();
    }
  
}

document.querySelector('.js-add-td-button').removeEventListener('click', null);
