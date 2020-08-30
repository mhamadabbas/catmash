"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const app_1 = require("./app/app");
const environment_1 = require("./environments/environment");
const cat_model_1 = require("./app/models/cat.model");
const cats_data = require("./cats.json");
const DB_URI = `mongodb://${environment_1.environment.db.HOST}:${environment_1.environment.db.PORT}/${environment_1.environment.db.DB}`;
// set port, listen for requests
const PORT = process.env.PORT || 80;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
/**
 * Drop database
 * then create documents from cats json
 */
const initDatabase = () => {
    mongoose.connection.dropDatabase(() => {
        console.log('Successfully connect to MongoDB.');
        cat_model_1.Cat.create(cats_data, (err, res) => {
            console.log('Data inserted !');
        });
    });
};
mongoose
    .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(initDatabase)
    .catch((err) => {
    console.error('Connection error', err);
    process.exit();
});
//# sourceMappingURL=server.js.map