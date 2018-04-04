const express = require('express');
const videoRoutes = require('./api/video/routes');

const PORT = process.env.PORT || 8888;

const app = express();
app.use(videoRoutes);

/* eslint-disable no-console */
app.listen(PORT, () => {
  console.log('App running on port ', PORT);
});
