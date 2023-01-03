const express = require('express');
const { readFile } = require('../utils/fsUtils');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
  const talkers = await readFile();

  return res.status(200).json(talkers);
});

talkerRouter.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();

  const talker = talkers.find((t) => t.id === Number(id));

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
});

module.exports = talkerRouter;