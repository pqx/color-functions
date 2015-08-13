var cf = require('./index');
var test = require('tape');

test('hex2rgb', function(t) {
  t.plan(4);
  t.deepEqual(cf.hex2rgb('3498db'), {r: 52, g: 152, b: 219});
  t.deepEqual(cf.hex2rgb('#3498db'), {r: 52, g: 152, b: 219});
  t.deepEqual(cf.hex2rgb('#aabbcc'), {r: 170, g: 187, b: 204});
  t.deepEqual(cf.hex2rgb('#abc'), {r: 170, g: 187, b: 204});
});

test('hsv2hex', function(t) {
  t.plan(1);
  t.strictEqual(cf.hsv2hex(204, 76, 86), '3599db');
});

test('hsv2rgb', function(t) {
  t.plan(1);
  t.deepEqual(cf.hsv2rgb(204, 76, 86), {r: 53, g: 153, b: 219});
});

test('rgb2hex', function(t) {
  t.plan(1);
  t.strictEqual(cf.rgb2hex(52, 152, 219), '3498db');
});

test('rgb2hsv', function(t) {
  t.plan(1);
  t.deepEqual(cf.rgb2hsv(52, 152, 219), {h: 204, s: 76, v: 86});
});

test('rgba', function(t) {
  t.plan(1);
  t.strictEqual(cf.rgba(52, 152, 219, 70), 'rgba(52,152,219,0.7)');
});

test('css-color', function(t) {
  t.plan(1);
  t.deepEqual(cf.cssColor('hsl(0, 100%, 50%)'), {r: 255, g: 0, b: 0});
});
