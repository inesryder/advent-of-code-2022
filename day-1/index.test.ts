import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts';
import { extractInputDoubleLines } from '../utils.ts';
import { firstAnswer, secondAnswer } from './index.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const inputPath = `${__dirname}/input`;
const exampleInputPath = `${__dirname}/input.example`;

Deno.test('first puzzle result with example', () => {
	const input = extractInputDoubleLines(exampleInputPath);
	const result = firstAnswer(input);
	assertEquals(result, 24000);
});

Deno.test('first puzzle result with input', () => {
	const input = extractInputDoubleLines(inputPath);
	const result = firstAnswer(input);
	assertEquals(result, 71924);
});

Deno.test('second puzzle result with example', () => {
	const input = extractInputDoubleLines(exampleInputPath);
	const result = secondAnswer(input);
	assertEquals(result, 45000);
});

Deno.test('second puzzle result with input', () => {
	const input = extractInputDoubleLines(inputPath);
	const result = secondAnswer(input);
	assertEquals(result, 210406);
});
