import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts';
import {
	firstAnswer,
	secondAnswer,
	hasCompleteOverlapingInterval,
	hasPartialOverlapingInterval,
} from './index.ts';
import { extractInputLines } from '../utils.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const inputPath = `${__dirname}/input`;
const exampleInputPath = `${__dirname}/input.example`;

const hasCompleteOverlapingIntervalTestCases = [
	{
		interval1: { min: 1, max: 2 },
		interval2: { min: 3, max: 4 },
		result: false,
	},
	{
		interval1: { min: 1, max: 4 },
		interval2: { min: 3, max: 6 },
		result: false,
	},
	{
		interval1: { min: 2, max: 4 },
		interval2: { min: 1, max: 6 },
		result: true,
	},
	{
		interval1: { min: 1, max: 4 },
		interval2: { min: 1, max: 6 },
		result: true,
	},
];

Deno.test('hasCompleteOverlapingInterval', async (t) => {
	for (const testCase of hasCompleteOverlapingIntervalTestCases) {
		await t.step(
			`choiceScore for ${testCase.interval1.min}-${testCase.interval1.max} and ${testCase.interval2.min}-${testCase.interval2.max} with ${testCase.result}`,
			() => {
				const result = hasCompleteOverlapingInterval(
					testCase.interval1,
					testCase.interval2
				);
				assertEquals(result, testCase.result);
			}
		);
	}
});

Deno.test('first puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = firstAnswer(input);
	assertEquals(result, 2);
});

Deno.test('first puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = firstAnswer(input);
	assertEquals(result, 569);
});

const hasPartialOverlapingIntervalTestCases = [
	{
		interval1: { min: 1, max: 2 },
		interval2: { min: 3, max: 4 },
		result: false,
	},
	{
		interval1: { min: 1, max: 4 },
		interval2: { min: 3, max: 6 },
		result: true,
	},
	{
		interval1: { min: 2, max: 4 },
		interval2: { min: 1, max: 6 },
		result: true,
	},
	{
		interval1: { min: 1, max: 4 },
		interval2: { min: 1, max: 6 },
		result: true,
	},
];

Deno.test('hasPartialOverlapingInterval', async (t) => {
	for (const testCase of hasPartialOverlapingIntervalTestCases) {
		await t.step(
			`choiceScore for ${testCase.interval1.min}-${testCase.interval1.max} and ${testCase.interval2.min}-${testCase.interval2.max} with ${testCase.result}`,
			() => {
				const result = hasPartialOverlapingInterval(
					testCase.interval1,
					testCase.interval2
				);
				assertEquals(result, testCase.result);
			}
		);
	}
});

Deno.test('second puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = secondAnswer(input);
	assertEquals(result, 4);
});

Deno.test('second puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = secondAnswer(input);
	assertEquals(result, 936);
});
