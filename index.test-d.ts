import {expectType} from 'tsd-check';
import pIf from '.';

expectType<Promise<number | string>>(
	pIf<number, string>(true, value => {
		expectType<number>(value);
		return 'foo';
	})(1)
);
expectType<Promise<number | string>>(
	pIf<number, string>(
		value => {
			expectType<number>(value);
			return true;
		},
		value => {
			expectType<number>(value);
			return 'foo';
		}
	)(1)
);
expectType<Promise<number | string>>(
	pIf<number, string>(
		value => {
			expectType<number>(value);
			return Promise.resolve(true);
		},
		value => {
			expectType<number>(value);
			return 'foo';
		}
	)(1)
);
expectType<Promise<number | string>>(
	pIf<number, string>(
		value => {
			expectType<number>(value);
			return Promise.resolve(true);
		},
		value => {
			expectType<number>(value);
			return Promise.resolve('foo');
		}
	)(1)
);
expectType<Promise<symbol | string>>(
	pIf<number, string, symbol>(
		true,
		value => {
			expectType<number>(value);
			return 'foo';
		},
		value => {
			expectType<number>(value);
			return Symbol();
		}
	)(1)
);
expectType<Promise<symbol | string>>(
	pIf<number, string, symbol>(
		value => {
			expectType<number>(value);
			return true;
		},
		value => {
			expectType<number>(value);
			return 'foo';
		},
		value => {
			expectType<number>(value);
			return Symbol();
		}
	)(1)
);
expectType<Promise<number | string | symbol>>(
	pIf<number, string, symbol>(
		value => {
			expectType<number>(value);
			return Promise.resolve(true);
		},
		value => {
			expectType<number>(value);
			return 'foo';
		},
		value => {
			expectType<number>(value);
			return Symbol();
		}
	)(1)
);
expectType<Promise<symbol | string>>(
	pIf<number, string, symbol>(
		value => {
			expectType<number>(value);
			return Promise.resolve(true);
		},
		value => {
			expectType<number>(value);
			return Promise.resolve('foo');
		},
		value => {
			expectType<number>(value);
			return Promise.resolve(Symbol());
		}
	)(1)
);
