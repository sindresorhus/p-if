'use strict';

module.exports = (cond, doIf, doElse) => val => {
	if (typeof cond === 'function') {
		return cond(val) ? doIf(val) : (doElse ? doElse(val) : val);
	}

	return cond ? doIf(val) : (doElse ? doElse(val) : val);
};
