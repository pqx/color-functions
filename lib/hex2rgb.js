module.exports = function(hex) {
  if(hex[0] === '#') hex = hex.substr(1);

  return {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16)
  };
};
