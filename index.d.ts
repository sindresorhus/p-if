declare const pIf: {
	/**
	Conditional promise chains. It's just a passthrough if `condition` is `false` and `doElse` is not provided.

	@param condition - Decides whether `doIf` or `doElse` is executed.
	@param doIf - Executed if `condition` is `true`. Expected to return a `Promise` or value.
	@param doElse - Executed if `condition` is `false`. Expected to return a `Promise` or value.
	@returns A [thunk](https://en.wikipedia.org/wiki/Thunk) that returns a `Promise`.

	@example
	```
	import pIf = require('p-if');

	getData()
		.then(pIf(process.env.NODE_ENV !== 'production', addDebugInfo))
		.then(data => {
			console.log(data);
		});

	// Can also be nested:

	getList()
		.then(pIf(shouldSort, pIf(sortDirection === 'ascending', sort.asc, sort.desc)))
		.then(list => {
			console.log(list);
		});
	```
	*/
	<ValueType, DoIfReturnType, DoElseReturnType = ValueType>(
		condition: boolean | ((value: ValueType) => boolean | PromiseLike<boolean>),
		doIf: (value: ValueType) => DoIfReturnType | PromiseLike<DoIfReturnType>,
		doElse?: (
			value: ValueType
		) => DoElseReturnType | PromiseLike<DoElseReturnType>
	): (value: ValueType) => Promise<DoIfReturnType | DoElseReturnType>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pIf<
	// 	ValueType,
	// 	DoIfReturnType,
	// 	DoElseReturnType = ValueType
	// >(
	// 	condition: boolean | ((value: ValueType) => boolean | PromiseLike<boolean>),
	// 	doIf: (value: ValueType) => DoIfReturnType | PromiseLike<DoIfReturnType>,
	// 	doElse?: (value: ValueType) => DoElseReturnType | PromiseLike<DoElseReturnType>
	// ): (value: ValueType) => Promise<DoIfReturnType | DoElseReturnType>;
	// export = pIf;
	default: typeof pIf;
};

export = pIf;
