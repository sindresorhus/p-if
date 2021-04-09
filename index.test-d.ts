import {expectType} from 'tsd';
import pIf from './index.js';

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
		async value => {
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
		async value => {
			expectType<number>(value);
			return true;
		},
		async value => {
			expectType<number>(value);
			return 'foo';
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
			return Symbol('fixture');
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
			return Symbol('fixture');
		}
	)(1)
);
expectType<Promise<string | symbol>>(
	pIf<number, string, symbol>(
		async value => {
			expectType<number>(value);
			return true;
		},
		value => {
			expectType<number>(value);
			return 'foo';
		},
		value => {
			expectType<number>(value);
			return Symbol('fixture');
		}
	)(1)
);
expectType<Promise<symbol | string>>(
	pIf<number, string, symbol>(
		async value => {
			expectType<number>(value);
			return true;
		},
		async value => {
			expectType<number>(value);
			return 'foo';
		},
		async value => {
			expectType<number>(value);
			return Symbol('fixture');
		}
	)(1)
);
