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

test('condition can be a function', async t => {
	const isEmpty = arr => arr.length === 0;

	const valA = await Promise.resolve([])
		.then(m(isEmpty, arr => arr.concat(42)));

	const valB = await Promise.resolve([1])
		.then(m(isEmpty, arr => arr.concat(42)));

	t.deepEqual(valA, [42]);
	t.deepEqual(valB, [1]);
});

test('condition can be an async function', async t => {
	const valA = await Promise.resolve([])
		.then(m(async () => true, arr => arr.concat(42)));

	const valB = await Promise.resolve([1])
		.then(m(async () => false, arr => arr.concat(42)));

	t.deepEqual(valA, [42]);
	t.deepEqual(valB, [1]);
});
