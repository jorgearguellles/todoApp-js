import './styles.css';
import { Todo,TodoList } from './classes';

const todo = new Todo('Cooking chicken')
const todo1 = new Todo('Wader chicken')
console.log(todo)


const todoList = new TodoList()
console.log(todoList);
todoList.newTodo(todo);
todoList.newTodo(todo1);
console.log(todoList);
