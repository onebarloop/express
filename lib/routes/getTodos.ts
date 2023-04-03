'use strict';

import { InMemoryStore } from '../store/InMemoryStore';
import { Request, Response } from 'express';

const getTodos = (store: InMemoryStore) => {
  return async function (req: Request, res: Response) {
    const todos = await store.getRemainingTodos();

    res.json(todos);
  };
};

export { getTodos };
