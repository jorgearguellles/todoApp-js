

export class TodoList{

  constructor(){
    this.todos = [];
  }

  newTodo(todo){
    this.todos.push(todo);
  }

  deleteTodo(id){
    this.todos = this.todos.filter( todo => todo.id != id );
  }

  completedToggleTodo(id){
    const findElementById = this.todos.find(todo => todo.id == id);
    console.log(findElementById)
    findElementById.completedToggleTodo = !findElementById.completedToggleTodo;
  }

  deleteAllCompletedTodos(){

  }
}