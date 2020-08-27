import { Environment } from '../app/models/environment.model';

export const environment: Environment = {
  app: {
    port: 8080,
  },
  db: {
    HOST: 'localhost',
    PORT: 27017,
    DB: 'catmash',
  },
};
