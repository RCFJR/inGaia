const mongoose = require('mongoose');

const uri = "mongodb+srv://mongo_root:<2EvHv#22>@cluster0.p2jnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;