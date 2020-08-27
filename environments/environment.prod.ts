import { Environment } from "../app/models/environment.model";

export const environment: Environment = {
  app: {
    port: 8080
  },
  db: {
    HOST: 'database',
    PORT: 27017,
    DB: 'catmash'
  }
};
