export const extractInput = (path: string): string =>
	Deno.readTextFileSync(path);

export const extractInputLines = (path: string): string[] => {
	const data = Deno.readTextFileSync(path);
	const input = data.split(/\r\n|\n/).filter((line: string) => line !== '');
	return input;
};

export const extractInputDoubleLines = (path: string): string[][] => {
	const data = Deno.readTextFileSync(path);
	const input = data
		.split(/(\r\n|\n){2}/)
		.map((block) =>
			block.split(/\r\n|\n/).filter((line: string) => line !== '')
		)
		.filter((block) => block.length > 0);
	return input;
};

export const extractInputLinesAsNumbers = (path: string): number[] => {
	return extractInputLines(path).map((line) => Number(line));
};

export const sum = (numbers: number[]): number => {
	return numbers.reduce((acc, val) => acc + val, 0);
};
