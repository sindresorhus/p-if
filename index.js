'use strict';

module.exports = (cond, doIf, doElse) => val => {
	if (typeof cond === 'function') {
		return Promise.resolve(cond(val))
			.then(bool => bool === true ? doIf(val) : (doElse ? doElse(val) : val));
	}

	return cond ? doIf(val) : (doElse ? doElse(val) : val);
};
