var shebangRegex = require('shebang-regex');

module.exports = function (str, replacement) {
  if (replacement === undefined) {
    replacement = '';
  }

  return str.replace(shebangRegex, replacement);
};
