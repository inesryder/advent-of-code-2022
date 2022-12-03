import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts';
import {
	firstAnswer,
	secondAnswer,
	choiceScore,
	matchupScore,
	getChoiceForMatchup,
} from './index.ts';
import { extractInputLines } from '../utils.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const inputPath = `${__dirname}/input`;
const exampleInputPath = `${__dirname}/input.example`;

const choiceScoreTestCases: { choice: string; result: number }[] = [
	{ choice: 'X', result: 1 },
	{ choice: 'Y', result: 2 },
	{ choice: 'Z', result: 3 },
];

Deno.test('test choiceScore', async (t) => {
	for (const testCase of choiceScoreTestCases) {
		await t.step(
			`choiceScore for ${testCase.choice} with ${testCase.result}`,
			() => {
				const result = choiceScore(testCase.choice);
				assertEquals(result, testCase.result);
			}
		);
	}
});

const matchupScoreTestCases: {
	opponentChoice: string;
	playerChoice: string;
	result: number;
}[] = [
	{ opponentChoice: 'A', playerChoice: 'Z', result: 0 },
	{ opponentChoice: 'B', playerChoice: 'X', result: 0 },
	{ opponentChoice: 'C', playerChoice: 'Y', result: 0 },
	{ opponentChoice: 'A', playerChoice: 'X', result: 3 },
	{ opponentChoice: 'B', playerChoice: 'Y', result: 3 },
	{ opponentChoice: 'C', playerChoice: 'Z', result: 3 },
	{ opponentChoice: 'A', playerChoice: 'Y', result: 6 },
	{ opponentChoice: 'B', playerChoice: 'Z', result: 6 },
	{ opponentChoice: 'C', playerChoice: 'X', result: 6 },
];

Deno.test('test matchupScore', async (t) => {
	for (const testCase of matchupScoreTestCases) {
		await t.step(
			`matchupScore for ${testCase.opponentChoice} and ${testCase.playerChoice} with ${testCase.result}`,
			() => {
				const result = matchupScore(
					testCase.opponentChoice,
					testCase.playerChoice
				);
				assertEquals(result, testCase.result);
			}
		);
	}
});

Deno.test('first puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = firstAnswer(input);
	assertEquals(result, 15);
});

Deno.test('first puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = firstAnswer(input);
	assertEquals(result, 14375);
});

const getChoiceForMatchupTestCases: {
	opponentChoice: string;
	matchupResult: 'lose' | 'draw' | 'win';
	result: string;
}[] = [
	{ opponentChoice: 'A', matchupResult: 'lose', result: 'Z' },
	{ opponentChoice: 'B', matchupResult: 'lose', result: 'X' },
	{ opponentChoice: 'C', matchupResult: 'lose', result: 'Y' },
	{ opponentChoice: 'A', matchupResult: 'draw', result: 'X' },
	{ opponentChoice: 'B', matchupResult: 'draw', result: 'Y' },
	{ opponentChoice: 'C', matchupResult: 'draw', result: 'Z' },
	{ opponentChoice: 'A', matchupResult: 'win', result: 'Y' },
	{ opponentChoice: 'B', matchupResult: 'win', result: 'Z' },
	{ opponentChoice: 'C', matchupResult: 'win', result: 'X' },
];

Deno.test('test getChoiceForMatchup', async (t) => {
	for (const testCase of getChoiceForMatchupTestCases) {
		await t.step(
			`getChoiceForMatchup for ${testCase.opponentChoice} and ${testCase.matchupResult} with ${testCase.result}`,
			() => {
				const result = getChoiceForMatchup(
					testCase.opponentChoice,
					testCase.matchupResult
				);
				assertEquals(result, testCase.result);
			}
		);
	}
});

Deno.test('second puzzle result with example', () => {
	const input = extractInputLines(exampleInputPath);
	const result = secondAnswer(input);
	assertEquals(result, 12);
});

Deno.test('second puzzle result with input', () => {
	const input = extractInputLines(inputPath);
	const result = secondAnswer(input);
	assertEquals(result, 10274);
});
