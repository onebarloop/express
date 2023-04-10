import { createTodo } from '../createTodo';
import { Request, Response } from 'express';
import { InMemoryStore, Todo } from '../store/InMemoryStore';

const noteTodo = (store: InMemoryStore) => {
  return async function (req: Request, res: Response) {
    const { description }: Todo = req.body;
    const todo = createTodo(description);

    await store.noteTodo(todo);

    res.json({ id: todo.id });

    console.log(todo);
  };
};

export { noteTodo };
