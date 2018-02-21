# Interview Question: Write a `series()` function

This question will challenge your knowledge of:

- Async (via callbacks)
- Error handling
- Recursion
- Scopes

Your challenge is to create a function `series()` which accepts an array of
functions named `steps` to be called and a `callback` to be called with the
results.

```js
function readFile(fileName, callback) {
  fs.readFile(fileName, (error, result) => {
    if (error) {
      cb(error);
    } else {
      cb(null, result.toString());
    }
  });
}

series([
  callback => readFile('./foo', callback),
  callback => readFile('./bar', callback),
  callback => readFile('./baz', callback),
], (error, results) => {
  console.log({ error, results });
  // { error: null, results: ['foo\n', 'bar\n', 'baz\n'] }
});
```

If you write the code in [`./index.js`](index.js) you can use the tests in
[`./test.js`](test.js) to make sure it works correctly.

### Additional questions

These are questions we may follow up with. We probably won't ask all of them
and there isn't one correct answer.

- What would be a better way of writing code like this? Why is it better?
- What features could you add to this function to make it even more useful?
