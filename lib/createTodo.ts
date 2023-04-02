'use strict';

const crypto = require('crypto');

const createTodo = ({ description }: { description: string }) => {
  return {
    id: crypto.randomUUID(),
    description,
    status: 'open',
  };
};

export { createTodo };
