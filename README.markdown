# jest-rx-spike

1. Run `npm install`
2. Run `npm test`
3. See syntax error from import of Rx.

Also try `node index.js` to see a script happily importing and running Rx.

The full error:

```
$ npm test

> jest-rx-spike@1.0.0 test c:\Users\redacted\jest-rx-spike
> jest

Using Jest CLI v0.5.0
Waiting on 1 test...
 FAIL  __tests__\test-something.js
SyntaxError: c:\Users\redacted\jest-rx-spike\__tests__\test-something.js: c:\Users\redacted\jest-rx-spike\node_modules\rx\index.js: Unexpected token catch
1 test failed, 0 tests passed (1 total)
Run time: 0.524s
npm ERR! Test failed.  See above for more details.
```
