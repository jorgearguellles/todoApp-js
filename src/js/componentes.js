// HTML Referees
const divTodoList = document.querySelector('.todo-list');


export const createTodoHTML = (todo) => {
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