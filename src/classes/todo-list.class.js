

export class TodoList{

  constructor(){
    this.loadTodosOnLocalStorage();
  }

  newTodo(todo){
    this.todos.push(todo);
    this.saveTodosOnLocalStorage();
  }

  deleteTodo(id){
    this.todos = this.todos.filter( todo => todo.id != id );
    this.saveTodosOnLocalStorage();
  }

  completedToggleTodo(id){
    const findElementById = this.todos.find(todo => todo.id == id);
    console.log(findElementById)
    findElementById.completedToggleTodo = !findElementById.completedToggleTodo;
    this.saveTodosOnLocalStorage();
  }

  deleteAllCompletedTodos(){
    this.todos = this.todos.filter( todo => !todo.completed);
    this.saveTodosOnLocalStorage();
  }

  saveTodosOnLocalStorage(){
    localStorage.setItem( 'todo', JSON.stringify(this.todos) );
  }

  loadTodosOnLocalStorage(){
    this.todos = localStorage.getItem('todo')
      ? JSON.parse( localStorage.getItem('todo') )
      : [];
  }
}