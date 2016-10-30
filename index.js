'use strict';

module.exports = (cond, doIf, doElse) => val => {
	const chooseFn = bool => bool === true ? doIf(val) : (doElse ? doElse(val) : val);

	if (typeof cond === 'function') {
		return Promise.resolve(cond(val)).then(chooseFn);
	}

	return chooseFn(cond);
};

