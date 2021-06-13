const CalculateModel = require('../model/Calculate');

const CalculateValidation = async (req, res, next) => {

  const { meters } = req.body;

  if(!meters)
    return res.status(400).json({ error: 'A quantidade de metros do imóvel é obrigatória'});
  else if((meters < 10) || (meters > 10000))
    return res.status(400).json({ error: 'A quantidade de metros deve ser entre 10 e 10.000'});
  else{
    next();
  }

}

module.exports = CalculateValidation;