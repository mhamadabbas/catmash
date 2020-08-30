"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const cat_model_1 = require("../models/cat.model");
class CatController {
}
exports.CatController = CatController;
/**
 * Find cat by id in database
 * And increment its vote property
 * @param req http request (got the id in params)
 * @param res http response (updated cat)
 * @returns {void}
 */
CatController.vote = (req, res) => {
    cat_model_1.Cat.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } }, (err, cat) => {
        if (err) {
            res.status(500).send({ message: err });
        }
        else if (cat) {
            res.status(200).send(cat);
        }
        else {
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
CatController.getAll = (req, res) => {
    cat_model_1.Cat.find({})
        .sort({ vote: -1 })
        .exec((err, cats) => {
        if (err) {
            res.status(500).send({ message: err });
        }
        else if (cats) {
            res.status(200).send(cats);
        }
        else {
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
CatController.getRandom = (req, res) => {
    cat_model_1.Cat.countDocuments({}, (err, count) => {
        if (err) {
            res.status(500).send({ message: err });
        }
        else {
            const RAND = Math.floor(Math.random() * count);
            cat_model_1.Cat.findOne()
                .skip(RAND)
                .exec((err2, cat) => {
                if (err2) {
                    res.status(500).send({ message: err2 });
                }
                else if (cat) {
                    res.status(200).send(cat);
                }
                else {
                    res.status(400).send({ message: 'No random cat found !' });
                }
            });
        }
    });
};
//# sourceMappingURL=cat.controller.js.map