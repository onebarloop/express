import { Request, Response } from 'express';
import { InMemoryStore, Todo } from '../store/InMemoryStore';

const toggleTodo = (store: InMemoryStore) => {
  return async function (req: Request, res: Response) {
    const { id }: Todo = req.body;
    const updatedTodos = await store.toggleTodoStatus(id);

    res.json(updatedTodos.find((todo) => todo.id === id));
  };
};

export { toggleTodo };
