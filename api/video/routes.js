const express = require('express');
const videoController = require('./controller');
const asyncErrorMiddleware = require('../middleware/error');

const router = express.Router();

const BASE_URL = '/api/v1/video';

router.get(`${BASE_URL}`, asyncErrorMiddleware(videoController.index));

module.exports = router;

