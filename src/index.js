const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
Routes = require('./routes/Routes');
const swaggerInfo = require('./config/swaggerInfo.json');


const swaggerOptions={
  swaggerDefinition:{
      info:{
          title: "inGaia API's",
          descripition: "APIs para consulta de valor por metro quadrado e valor de imóvel",
          contact: {
              name: "Roberto Fernandes"
          },
          servers: ["http://localhost:3333"]
      }
  },
  apis: ['./routes/Routes.js']
};

const swaggerDocs = swaggerJsDocs(swaggerInfo);

server.use('/', Routes);
server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.listen(process.env.PORT || 3333, () => {
  console.log('API ONLINE');
});