const express = require('express');
const videoRoutes = require('./api/video/routes');

// Default NGINX/ElasticBeanstalk proxy port.
const PORT = 8081;

const app = express();
app.use(videoRoutes);

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log('App running on port ', PORT);
});
