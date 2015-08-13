module.exports = function(h, s, v) {
  return {
    h: h,
    s: s * v/((hh = (2-s)*v) < 1 ? hh : 2 - hh),
    v: h / 2
  };
};