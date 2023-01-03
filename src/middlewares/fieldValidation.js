const dateRegex = require('../utils/dateRegex');

const nameAgeValidation = (req, res, next) => {
  const { name, age } = req.body;

  if (!name) next({ status: 400, message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }
  if (!age) next({ status: 400, message: 'O campo "age" é obrigatório' });
  if (age < 18) next({ status: 400, message: 'A pessoa palestrante deve ser maior de idade' });
  next();
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) next({ status: 400, message: 'O campo "talk" é obrigatório' });
  if (!talk.watchedAt) {
    next({ status: 400, message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!dateRegex(talk.watchedAt)) {
    next({ status: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

const talkRateValidation = (req, res, next) => {
  const { talk } = req.body;
  
  if (talk.rate < 1 || talk.rate > 5) {
   next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!talk.rate) next({ status: 400, message: 'O campo "rate" é obrigatório' });
  if (!Number.isInteger(talk.rate)) {
    next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  } 

  next();
};

module.exports = {
  nameAgeValidation,
  talkValidation,
  talkRateValidation,
};