import { environment as development } from './environment.dev';
import { environment as production } from './environment.prod';

const environments = {
  development,
  production
};

export const environment = environments[process.env.NODE_ENV];
