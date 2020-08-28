import * as express from 'express';

import { CatController } from '../controllers/cat.controller';

export const CAT_ROUTER = express
  .Router()
  .put('/vote/:id', CatController.vote)
  .get('/random', CatController.getRandom)
  .get('/', CatController.getAll);
