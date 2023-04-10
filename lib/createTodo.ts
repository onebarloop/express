import crypto from 'crypto';
import { Todo } from './store/InMemoryStore';

const createTodo = (description: string): Todo => {
  return {
    id: crypto.randomUUID(),
    description,
    status: 'open',
  };
};

export { createTodo };
