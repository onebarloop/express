'use strict';

class InMemoryStore {
  constructor() {
    //not used
  }

  async initialize() {
    this.todos = [];
  }

  async noteTodo({ todo }) {
    this.todos.push(todo);
  }

  async getRemainingTodos() {
    return this.todos;
  }
}

module.exports = { InMemoryStore };
