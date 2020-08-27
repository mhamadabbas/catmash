export interface Environment {
  app: { port: number };
  db: {
    HOST: string;
    PORT: number;
    DB: string;
  };
}
