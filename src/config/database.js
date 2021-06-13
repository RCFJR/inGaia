const mongoose = require('mongoose');

const uri = "mongodb+srv://n3wCon3x:n3wCon3x@cluster0.p2jnd.mongodb.net/inGaia?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;