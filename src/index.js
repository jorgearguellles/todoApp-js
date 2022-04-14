import './styles.css';

import { TodoList } from './classes';
import { createTodoHTML } from './js/components';

export const todoList = new TodoList();

// Show TOdos saved on LocalStorage
todoList.todos.forEach(createTodoHTML);
