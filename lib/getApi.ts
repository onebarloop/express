'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getTodos } = require('./routes/getTodos');
const { noteTodo } = require('./routes/noteTodo');
const { InMemoryStore } = require('./store/InMemoryStore');

const getApi = ({ store }: typeof InMemoryStore) => {
  const api = express();

  api.use(cors());
  api.use(bodyParser.json());

  // Commands
  api.post('/note-todo', noteTodo({ store }));

  // Queries
  api.get('/todos', getTodos({ store }));

  return api;
};

export { getApi };
