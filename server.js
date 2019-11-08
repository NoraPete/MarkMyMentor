'use strict';

const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});
