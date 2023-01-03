const dateRegex = (input) => {
  const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  return input.match(reg);
};

module.exports = dateRegex;