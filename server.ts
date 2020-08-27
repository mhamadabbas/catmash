import * as mongoose from 'mongoose';

import app from './app/app';
import { environment } from './environments/environment';
import { Cat, ICat } from './app/models/cat.model';
import * as cats_data from './cats.json';

const DB_URI: string = `mongodb://${environment.db.HOST}:${environment.db.PORT}/${environment.db.DB}`;

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    Cat.create(cats_data, (err: any, res: ICat[]) => {
      console.log('Dummy data inserted !');
    });
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });
