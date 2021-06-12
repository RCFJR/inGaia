const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

server.listen(80, () => {
  console.log('API ONLINE');
});