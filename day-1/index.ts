const __dirname = new URL('.', import.meta.url).pathname;

export const firstAnswer = (input: string[][]): number => {
	const totalCalories = input.map((caloryList) =>
		caloryList.reduce((acc, val) => acc + Number(val), 0)
	);
	return totalCalories.reduce((acc, val) => (val > acc ? val : acc), 0);
};

export const secondAnswer = (input: string[][]): number => {
	const totalCalories = input.map((caloryList) =>
		caloryList.reduce((acc, val) => acc + Number(val), 0)
	);
	const sortedTotalCalories = totalCalories.sort((a, b) => b - a);
	return (
		sortedTotalCalories[0] + sortedTotalCalories[1] + sortedTotalCalories[2]
	);
};
