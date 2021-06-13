const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CalculateSchema = new Schema({
    square_meter_value: {type: Number, required: true}
  });
  
  module.exports = mongoose.model('Calculate', CalculateSchema);