# p-if [![Build Status](https://travis-ci.org/sindresorhus/p-if.svg?branch=master)](https://travis-ci.org/sindresorhus/p-if)

> Conditional promise chains


## Install

```
$ npm install --save p-if
```


## Usage

```js
const pIf = require('p-if');

getData()
	.then(pIf(process.env.NODE_ENV !== 'production', addDebugInfo))
	.then(data => {
		console.log(data);
	});
```

Can also be nested:

```js
const pIf = require('p-if');

getList()
	.then(pIf(shouldSort, pIf(sortDirection === 'ascending', sort.asc, sort.desc)))
	.then(list => {
		console.log(list);
	});
```


## API

### pIf(condition, doIf, [doElse])

It's just a passthrough if `condition` is `false` and `doElse` is not provided.

Returns a [thunk](https://en.m.wikipedia.org/wiki/Thunk) that returns a `Promise`.

#### condition

Type: `boolean` `Function`

Decides whether `doIf` or `doElse` is executed. Expected to return a `Promise` that resolves to `true` or the value `true`.

#### doIf

Type: `Function`

Executed if `condition` is `true`.

Expected to return a `Promise` or value.

#### doElse

Type: `Function`

Executed if `condition` is `false`.

Expected to return a `Promise` or value.


## Related

- [p-catch-if](https://github.com/sindresorhus/p-catch-if) - Conditional promise catch handler
- [p-log](https://github.com/sindresorhus/p-log) - Log the value/error of a promise
- [p-tap](https://github.com/sindresorhus/p-tap) - Tap into a promise chain without affecting its value or state
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
