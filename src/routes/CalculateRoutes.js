const express = require('express');
const router = express.Router();

const CalculateController = require('../controller/CalculateController');
const CalculateValidation = require('../middlewares/CalculateValidation');

router.get('/SquareMeterValue', CalculateController.SquareMeterValue);
router.get('/PropertyValue', CalculateValidation, CalculateController.PropertyValue);
router.post('/', CalculateController.create);

module.exports = router;