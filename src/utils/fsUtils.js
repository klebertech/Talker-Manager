const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
    const talkers = JSON.parse(data);
    
    return talkers;
  } catch (err) {
    console.log('Error na leitura');
    console.log(err.message);
  }
};

const writeFile = async (data) => {
  try {
    await fs.writeFile(path.resolve(__dirname, '../talker.json'), JSON.stringify(data));
    return true;
  } catch (err) {
    console.log('Error ao salvar');
    console.log(err.message);
    return false;
  }
};

module.exports = { readFile, writeFile };