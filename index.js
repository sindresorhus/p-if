'use strict';
module.exports = (cond, doIf, doElse) => val => cond ? doIf(val) : (doElse ? doElse(val) : val);
