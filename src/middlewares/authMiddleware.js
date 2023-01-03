const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) next({ status: 401, message: 'Token não encontrado' });
  if (authorization.length !== 16) next({ status: 401, message: 'Token inválido' });
  next();
};

module.exports = authMiddleware;