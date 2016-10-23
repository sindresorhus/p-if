import test from 'ava';
import m from './';

const fixture = Symbol('fixture');

test('if', async t => {
	const val = await Promise.resolve(fixture)
		.then(m(true, () => 'if', () => 'else'));

	t.is(val, 'if');
});

test('else', async t => {
	const val = await Promise.resolve(fixture)
		.then(m(false, () => 'if', () => 'else'));

	t.is(val, 'else');
});

test('passthrough', async t => {
	const val = await Promise.resolve(fixture)
		.then(m(false, () => 'if'));

	t.is(val, fixture);
});

test('composability', async t => {
	const val = await Promise.resolve(fixture)
		.then(m(true, m(false, () => 'if', () => 'else')));

	t.is(val, 'else');
});
