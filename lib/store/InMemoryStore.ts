'use strict';

class InMemoryStore {
  todos!: string[];

  constructor() {
    //not used
  }

  async initialize() {
    this.todos = [];
  }

  async noteTodo({ todo }: { todo: string }) {
    this.todos.push(todo);
  }

  async getRemainingTodos() {
    return this.todos;
  }
}

export { InMemoryStore };
