var assert = require('assert');
var cf = require('./index');

describe('color functions', function() {
  it('hex2rgb', function() {
    assert.deepEqual(cf.hex2rgb('3498db'), {r: 52, g: 152, b: 219});
    assert.deepEqual(cf.hex2rgb('#3498db'), {r: 52, g: 152, b: 219});
    assert.deepEqual(cf.hex2rgb('#aabbcc'), {r: 170, g: 187, b: 204});
    assert.deepEqual(cf.hex2rgb('#abc'), {r: 170, g: 187, b: 204});
  });

  it('hsv2hex', function() {
    assert.strictEqual(cf.hsv2hex(204, 76, 86), '3599db');
  });

  it('hsv2rgb', function() {
    assert.deepEqual(cf.hsv2rgb(204, 76, 86), {r: 53, g: 153, b: 219});
  });

  it('rgb2hex', function() {
    assert.strictEqual(cf.rgb2hex(52, 152, 219), '3498db');
  });

  it('rgb2hsv', function() {
    assert.deepEqual(cf.rgb2hsv(52, 152, 219), {h: 204, s: 76, v: 86});
  });

  it('rgba', function() {
    assert.strictEqual(cf.rgba(52, 152, 219, 70), 'rgba(52,152,219,0.7)');
  });
});
