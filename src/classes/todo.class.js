

export class Todo{

  constructor(todoTitle){
    this.todoTitle = todoTitle;

    this.id = new Date().getTime(); // 1213232435
    this.completed = false;
    this.creationDate = new Date();
  }
}