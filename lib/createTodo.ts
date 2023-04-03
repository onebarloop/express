'use strict';

import crypto from 'crypto';

const createTodo = (description: string) => {
  return {
    id: crypto.randomUUID(),
    description,
    status: 'open',
  };
};

export { createTodo };
