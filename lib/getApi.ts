import express from 'express';
import bodyParser from 'body-parser';
import { getTodos } from './routes/getTodos';
import { noteTodo } from './routes/noteTodo';
import { toggleTodo } from './routes/toggleTodo';
import { InMemoryStore } from './store/InMemoryStore';
const cors = require('cors');

const getApi = (store: InMemoryStore) => {
  const api = express();

  api.use(cors());
  api.use(bodyParser.json());

  // Commands
  api.post('/note-todo', noteTodo(store));
  api.put('/toggle-todo', toggleTodo(store));

  // Queries
  api.get('/todos', getTodos(store));

  return api;
};

export { getApi };
