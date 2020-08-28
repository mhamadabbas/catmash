import { Cat, ICat } from '../models/cat.model';

export class CatController {
  /**
   * Find cat by id in database
   * And increment its vote property
   * @param req http request (got the id in params)
   * @param res http response (updated cat)
   * @returns {void}
   */
  static vote = (req, res) => {
    Cat.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } }, (err: any, cat: ICat) => {
      if (err) {
        res.status(500).send({ message: err });
      } else if (cat) {
        res.status(200).send(cat);
      } else {
        res.status(400).send({ message: 'No cat found for this id !' });
      }
    });
  };

  /**
   * Get all cats from database
   * Sort them by vote and send them
   * @param req http request (not usefull here)
   * @param res http response (all cats)
   * @returns {void}
   */
  static getAll = (req, res) => {
    Cat.find({})
      .sort({ vote: -1 })
      .exec((err: any, cats: ICat[]) => {
        if (err) {
          res.status(500).send({ message: err });
        } else if (cats) {
          res.status(200).send(cats);
        } else {
          res.status(400).send({ message: 'No cat found for this query !' });
        }
      });
  };

  /**
   * Count cat documents on database
   * Choose a random number between 0 and this count
   * Then get and send the cat from this index on database
   * @param req http request (not usefull here)
   * @param res http response (random cat)
   * @returns {void}
   */
  static getRandom = (req, res) => {
    Cat.countDocuments({}, (err: any, count: number) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        const RAND = Math.floor(Math.random() * count);
        Cat.findOne()
          .skip(RAND)
          .exec((err2: any, cat: ICat) => {
            if (err2) {
              res.status(500).send({ message: err2 });
            } else if (cat) {
              res.status(200).send(cat);
            } else {
              res.status(400).send({ message: 'No random cat found !' });
            }
          });
      }
    });
  };
}
