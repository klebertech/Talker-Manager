const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const emailValidated = String(email)
      .toLowerCase()
      .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } if (!emailValidated) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = validateEmail;