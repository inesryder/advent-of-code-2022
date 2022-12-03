import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts';
import { firstAnswer, secondAnswer } from './index.ts';
import { extractInputLines } from '../utils.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const inputPath = `${__dirname}/input`;
const exampleInputPath = `${__dirname}/input.example`;

Deno.test('test case', () => {
	assertEquals(1, 1);
});

Deno.test('first puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = firstAnswer(input);
	assertEquals(result, 0);
});

// Deno.test('first puzzle result with input', () => {
Deno.test({ name: 'first puzzle result with input', ignore: true }, () => {
	const input = extractInputLines(inputPath);
	const result = firstAnswer(input);
	assertEquals(result, 0);
});

Deno.test('second puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = secondAnswer(input);
	assertEquals(result, 0);
});

// Deno.test('second puzzle result with input', () => {
Deno.test({ name: 'second puzzle result with input', ignore: true }, () => {
	const input = extractInputLines(inputPath);
	const result = secondAnswer(input);
	assertEquals(result, 0);
});
