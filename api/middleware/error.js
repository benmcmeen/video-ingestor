const asyncErrorMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch((error) => {
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
    });
};

module.exports = asyncErrorMiddleware;
