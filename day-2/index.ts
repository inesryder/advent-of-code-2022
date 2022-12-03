export const choiceScore = (choice: string) => {
	switch (choice) {
		case 'X':
			return 1;
		case 'Y':
			return 2;
		case 'Z':
			return 3;
		default:
			return 0;
	}
};

const OPPONENT_CHOICES = ['A', 'B', 'C'];
const PLAYER_CHOICES = ['X', 'Y', 'Z'];
enum MatchupValue {
	LOSE = 0,
	DRAW = 3,
	WIN = 6,
}

export const matchupScore = (opponentChoice: string, playerChoice: string) => {
	const opponentChoiceIndex = OPPONENT_CHOICES.indexOf(opponentChoice);
	const playerChoiceIndex = PLAYER_CHOICES.indexOf(playerChoice);

	if (playerChoiceIndex === opponentChoiceIndex) {
		return MatchupValue.DRAW;
	}

	if (playerChoiceIndex === (opponentChoiceIndex + 1) % 3) {
		return MatchupValue.WIN;
	}

	return MatchupValue.LOSE;
};

export const firstAnswer = (input: string[]): number => {
	const choices = input.map((line) => {
		const [opponentChoice, playerChoice] = line.split(' ');
		return { opponentChoice, playerChoice };
	});

	const scores = choices.map(
		({ opponentChoice, playerChoice }) =>
			choiceScore(playerChoice) + matchupScore(opponentChoice, playerChoice)
	);

	return scores.reduce((acc, val) => acc + val, 0);
};

export const getChoiceForMatchup = (
	opponentChoice: string,
	matchupResult: 'lose' | 'draw' | 'win'
) => {
	const opponentChoiceIndex = OPPONENT_CHOICES.indexOf(opponentChoice);

	if (matchupResult === 'draw') {
		return PLAYER_CHOICES[opponentChoiceIndex];
	}

	if (matchupResult === 'win') {
		return PLAYER_CHOICES[(opponentChoiceIndex + 1) % 3];
	}

	return PLAYER_CHOICES[(opponentChoiceIndex + (3 - 1)) % 3];
};

export const secondAnswer = (input: string[]): number => {
	const choices = input.map((line) => {
		const [opponentChoice, matchupIdentifier] = line.split(' ');
		const matchupResult: 'lose' | 'draw' | 'win' =
			matchupIdentifier === 'X'
				? 'lose'
				: matchupIdentifier === 'Y'
				? 'draw'
				: 'win';
		return { opponentChoice, matchupResult };
	});

	const finalChoices = choices.map(({ opponentChoice, matchupResult }) => ({
		opponentChoice,
		playerChoice: getChoiceForMatchup(opponentChoice, matchupResult),
	}));

	const scores = finalChoices.map(
		({ opponentChoice, playerChoice }) =>
			choiceScore(playerChoice) + matchupScore(opponentChoice, playerChoice)
	);

	return scores.reduce((acc, val) => acc + val, 0);
};
