'use strict';
const test = require('ava');
const series = require('./');

test.cb('calls each step in order and aggregates results', t => {
  t.plan(2);
  series([
    cb => cb(null, 1),
    cb => cb(null, 2),
    cb => cb(null, 3),
  ], (error, results) => {
    t.is(error, null);
    t.deepEqual(results, [1, 2, 3]);
    t.end();
  });
});

test.cb('skips remaining steps when one errors', t => {
  t.plan(2);
  series([
    cb => cb(new Error('Err!')),
    cb => t.fail(),
  ], (error, results) => {
    t.true(error instanceof Error);
    t.is(results, null);
    t.end();
  });
});

test.cb('works async', t => {
  t.plan(2);
  series([
    cb => setTimeout(() => cb(null, 1), 30),
    cb => setTimeout(() => cb(null, 2), 20),
    cb => setTimeout(() => cb(null, 3), 10),
  ], (error, results) => {
    t.is(error, null);
    t.deepEqual(results, [1, 2, 3]);
    t.end();
  });
});
