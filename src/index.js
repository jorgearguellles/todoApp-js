import './styles.css';
import { Todo,TodoList } from './classes';
import { createTodoHTML } from './js/componentes';

export const todoList = new TodoList();

const todo = new Todo('Learn OOP on TypeScript')

todoList.newTodo(todo);
createTodoHTML(todo)

console.log(todoList);
