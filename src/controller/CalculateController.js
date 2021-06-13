const CalculateModel = require('../model/Calculate');

class CalculateController {

    async create(req, res){
        const calc = new CalculateModel(req.body);
        await calc
              .save()
              .then(response => {
                return res.status(200).json(response);
              })
              .catch(error => {
                return res.status(500).json(error);
              });
      }

    async SquareMeterValue(req, res){
    
        await CalculateModel.find()
              .then(response => {
                var meter_value = response[0].square_meter_value;
                var result = "O valor do metro é R$ " + meter_value + " reais";
                return res.status(200).json(result);
              })
              .catch(error => {
                return res.status(500).json(error);
              });
      }


      async PropertyValue(req, res){
    
        await CalculateModel.find()
              .then(response => {
                var property_value = req.body.meters * response[0].square_meter_value;
                var result = "O valor do imóvel é R$ " + property_value + " reais";
                return res.status(200).json(result);
              })
              .catch(error => {
                return res.status(500).json(error);
              });
      }
  
  }
  
  module.exports = new CalculateController();