import * as express from 'express';

import CatController from '../controllers/cat.controller';

export default express
    .Router()
    .put(':id', CatController.update)
    .get(':id', CatController.get)
    .get('', CatController.getAll);
