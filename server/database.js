const mongoose = require('mongoose');

const URL = 'mongodb+srv://mean-crud:mean-crud@crud-angular.k1dlm.mongodb.net/mean-productos?retryWrites=true&w=majority'


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            console.log("Conectado correctamente")
        })
        .catch((err) => {
            console.log("Error", err);
        });

module.exports = mongoose;

