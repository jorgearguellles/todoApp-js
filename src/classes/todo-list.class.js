

export class TodoList{

  constructor(){
    this.todo = [];
  }

  newTodo(todo){
    this.todo.push(todo);
  }
}