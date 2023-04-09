"use strict";

interface Todo {
  id: string;
  description: string;
  status: "open" | "closed";
}

class InMemoryStore {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  async noteTodo(todo: Todo) {
    this.todos.push(todo);
  }

  async getRemainingTodos() {
    return this.todos;
  }

  async toggleTodoStatus(id: string) {
    return (this.todos = this.todos.map((todo): Todo => {
      if (todo.id === id) {
        if (todo.status === "open") {
          return { ...todo, status: "closed" };
        } else return { ...todo, status: "open" };
      } else return todo;
    }));
  }
}
export { InMemoryStore, Todo };
