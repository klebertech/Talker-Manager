const express = require('express');
const { generateId } = require('./utils/generateId');
const talkerRouter = require('./routes/talkerRoutes');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');

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

app.use(talkerRouter);

app.post('/login', validateEmail, validatePassword, (req, res) => {
  const { email, password } = req.body;

  const token = generateId();
  if (email && password) {
    return res.status(200).json({ token });
  }
});