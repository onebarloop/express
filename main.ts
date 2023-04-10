import http from 'http';
import { flaschenpost } from 'flaschenpost';
import { processenv } from 'processenv';
import { getApi } from './lib/getApi';
import { InMemoryStore } from './lib/store/InMemoryStore';

(async () => {
  const logger = flaschenpost.getLogger();

  const store = new InMemoryStore();

  const api = getApi(store);
  const server = http.createServer(api);

  const port = processenv('PORT', 3000);

  server.listen(port, () => {
    logger.info('Server started', { port });
  });
})();
