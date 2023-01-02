const idLenght = 16;

const generateId = () => {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < idLenght; i += 1) {
      id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
    return id;
};

module.exports = { generateId };