const fs = require('fs').promises;
const path = require('path');

async function readFile() {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const talkers = JSON.parse(data);
  
  return talkers;
}

module.exports = { readFile };