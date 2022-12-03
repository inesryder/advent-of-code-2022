import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts';
import {
	firstAnswer,
	secondAnswer,
	findFirstCommonItem,
	findCommonItemInGroup,
	findCommonItems,
} from './index.ts';
import { extractInputLines } from '../utils.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const inputPath = `${__dirname}/input`;
const exampleInputPath = `${__dirname}/input.example`;

Deno.test('findCommonItem', () => {
	const item = findFirstCommonItem(['aBcd'.split(''), 'AbcD'.split('')]);
	assertEquals(item, 'c');
});

Deno.test('first puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = firstAnswer(input);
	assertEquals(result, 157);
});

Deno.test('first puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = firstAnswer(input);
	assertEquals(result, 7908);
});

Deno.test('findCommonItems', () => {
	const items = findCommonItems(['aBcd'.split(''), 'ABCd'.split('')]);
	assertEquals(items, ['B', 'd']);
});

Deno.test('findCommonItemInGroup', () => {
	const item = findCommonItemInGroup([
		'aBcd'.split(''),
		'xbcD'.split(''),
		'ZcyX'.split(''),
	]);
	assertEquals(item, 'c');
});

Deno.test('second puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = secondAnswer(input);
	assertEquals(result, 70);
});

Deno.test('second puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = secondAnswer(input);
	assertEquals(result, 2838);
});
