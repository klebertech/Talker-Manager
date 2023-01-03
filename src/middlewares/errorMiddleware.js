const errorMiddleware = (error, req, res, _next) => {
  res.status(error.status || 500).json({ message: error.message });
};

module.exports = errorMiddleware;