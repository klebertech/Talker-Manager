const express = require('express');
const { readFile, writeFile } = require('../utils/fsUtils');
const authMiddleware = require('../middlewares/authMiddleware');
const { 
  nameAgeValidation,
  talkValidation,
  talkRateValidation,
} = require('../middlewares/fieldValidation');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
  const talkers = await readFile();

  return res.status(200).json(talkers);
});

talkerRouter.get('/talker/:id', async (req, res, next) => {
  const { id } = req.params;
  const talkers = await readFile();

  const talker = talkers.find((t) => t.id === Number(id));

  if (!talker) {
    next({ status: 404, message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
});

talkerRouter.post('/talker',
  authMiddleware,
  nameAgeValidation,
  talkValidation,
  talkRateValidation,
  async (req, res) => {
    const talkers = await readFile();
    const { name, age, talk } = req.body;
    const newTalker = { 
      name,
      age,
      id: talkers.length + 1,
      talk,
    };

    talkers.push(newTalker);
    await writeFile(talkers);
    
    return res.status(201).json(newTalker);
});

talkerRouter.use((error, req, res, _next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = talkerRouter;