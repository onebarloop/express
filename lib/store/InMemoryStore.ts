'use strict';

class InMemoryStore {
  todos: { id: any; description: string; status: string }[];

  constructor() {
    this.todos = [];
  }

  async noteTodo(todo: { id: any; description: string; status: string }) {
    this.todos.push(todo);
  }

  async getRemainingTodos() {
    return this.todos;
  }
}

export { InMemoryStore };
