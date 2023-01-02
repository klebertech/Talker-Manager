const express = require('express');
const { readFile } = require('./services/fsUtils');
const { generateId } = require('./services/generateId');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const talkers = await readFile();

  return res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();

  const talker = talkers.find((t) => t.id === Number(id));

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const token = generateId();
  if (email && password) {
    return res.status(200).json({ token });
  }
});