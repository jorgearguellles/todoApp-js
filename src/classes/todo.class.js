

export class Todo{

  constructor(todo){
    this.todo = todo;

    this.id = new Date().getTime(); // 1213232435
    this.completed = false;
    this.creationDate = new Date();
  }
}