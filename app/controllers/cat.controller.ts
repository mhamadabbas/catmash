import { Cat, ICat } from '../models/cat.model';

export class CatController {
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
