import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import CAT_ROUTER from './routers/cat.router';

const staticRoot = __dirname + '/client';
const app = express();

//BASE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('', express.static(staticRoot));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
  next();
});

// ROUTERS
app.use('/api/cats', CAT_ROUTER);

export default app;
