import { Environment } from "../app/models/environment.model";

export const environment: Environment = {
  app: {
    port: 80
  },
  db: {
    HOST: 'database',
    PORT: 27017,
    DB: 'catmash'
  }
};
