import test from 'ava';
import pIf from '.';

const fixture = Symbol('fixture');

test('if', async t => {
	const value = await Promise.resolve(fixture)
		.then(pIf(true, () => 'if', () => 'else'));

	t.is(value, 'if');
});

test('else', async t => {
	const value = await Promise.resolve(fixture)
		.then(pIf(false, () => 'if', () => 'else'));

	t.is(value, 'else');
});

test('passthrough', async t => {
	const value = await Promise.resolve(fixture)
		.then(pIf(false, () => 'if'));

	t.is(value, fixture);
});

test('composability', async t => {
	const value = await Promise.resolve(fixture)
		.then(pIf(true, pIf(false, () => 'if', () => 'else')));

	t.is(value, 'else');
});

test('condition can be a function', async t => {
	const isEmpty = arr => arr.length === 0;

	const valueA = await Promise.resolve([])
		.then(pIf(isEmpty, arr => arr.concat(42)));

	const valueB = await Promise.resolve([1])
		.then(pIf(isEmpty, arr => arr.concat(42)));

	t.deepEqual(valueA, [42]);
	t.deepEqual(valueB, [1]);
});

test('condition can be an async function', async t => {
	const valueA = await Promise.resolve([])
		.then(pIf(async () => true, arr => arr.concat(42)));

	const valueB = await Promise.resolve([1])
		.then(pIf(async () => false, arr => arr.concat(42)));

	t.deepEqual(valueA, [42]);
	t.deepEqual(valueB, [1]);
});
