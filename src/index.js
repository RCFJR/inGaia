const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
Routes = require('./routes/Routes');
const swaggerInfo = require('./config/swaggerInfo.json');

const swaggerDocs = swaggerJsDocs(swaggerInfo);

server.use('/', Routes);
server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(process.env.PORT || 3333, () => {
  console.log('API ONLINE');
});