

export class TodoList{

  constructor(){
    this.todo = [];
  }

  newTodo(todo){
    this.todo.push(todo);
  }

  deleteTodo(id){
    
  }

  completedToggleTodo(id){
    const numberId = parseInt(id);

    for( let todo of this.todos){
      if( todo.id === numberId){
        todo.completedToggleTodo = !todo.completedToggleTodo;
        break;
      }
    }

    // Short way to find Element by Id:
    // const findElementById = this.todo.find(todo => todo.id === numberId);
    // findElementById.completedToggleTodo = !todo.completedToggleTodo;
  }

  deleteAllCompletedTodos(){

  }
}