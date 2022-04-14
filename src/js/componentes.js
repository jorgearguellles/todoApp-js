import { Todo } from "../classes";
import { todoList } from "../index";

// HTML Referees
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

// createToDoHTML
export const createTodoHTML = ( todo ) => {
    const {todoTitle, completed, id} = todo;

    const htmlTodo = `
        <li class="${completed ? 'completed' : '' }" data-id="${id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${completed ? 'checked' : '' }>
                <label>${todoTitle}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // Div Todo List
    divTodoList.append(div.firstElementChild)

    return div.firstElementChild;
}

// Events ===================================>

// 1. AddNewTodo:
txtInput.addEventListener('keyup', ( event )=>{
    // console.log(event) // Event will show what key was pressed by User
    if( event.keyCode === 13 && txtInput.value.length > 1 ){

        const newTodo = new Todo(txtInput.value)
        todoList.newTodo(newTodo);
        createTodoHTML(newTodo)
        txtInput.value = '';
    }
  }
);

// 2. Click completedToggle
divTodoList.addEventListener('click', (event)=>{

    const elementName = event.target.localName; // input, label, button
    const elementTodo = event.target.parentElement.parentElement; // li tag
    const todoId = elementTodo.getAttribute('data-id')

    if( elementName.includes('input') ){
        todoList.completedToggleTodo(todoId);
        elementTodo.classList.toggle('completed'); // toggle to underline todoTitle
    } else if ( elementName.includes('button') ){
        todoList.deleteTodo(todoId); // logic applied
        divTodoList.removeChild(elementTodo); // Delete on HTML
    }
})