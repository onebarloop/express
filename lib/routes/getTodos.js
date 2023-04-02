'use strict';

const getTodos = ({ store }) => {
  return async function (req, res) {
    const todos = await store.getRemainingTodos();

    res.json(todos);
  };
};

module.exports = { getTodos };
