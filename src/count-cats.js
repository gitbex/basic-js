module.exports = function countCats(mat) {
  return mat.reduce((acc, it) => [...acc, ...it], []).filter(val => val == "^^").length;
};
