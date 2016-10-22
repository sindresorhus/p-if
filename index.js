'use strict';

const isFn = require('is-fn');

module.exports = (cond, doIf, doElse) => val => {
	if (isFn(cond)) {
		return cond(val) ? doIf(val) : (doElse ? doElse(val) : val);
	}

	return cond ? doIf(val) : (doElse ? doElse(val) : val);
};
