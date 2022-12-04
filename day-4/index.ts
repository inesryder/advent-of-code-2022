type Interval = {
	min: number;
	max: number;
};

const lineToIntervalList = (line: string) => {
	const [elf1, elf2] = line.split(',');
	const [min1, max1] = elf1.split('-').map(Number);
	const [min2, max2] = elf2.split('-').map(Number);

	return [
		{ min: min1, max: max1 },
		{ min: min2, max: max2 },
	];
};

export const hasCompleteOverlapingInterval = (
	interval1: Interval,
	interval2: Interval
) =>
	(interval1.min <= interval2.min && interval1.max >= interval2.max) ||
	(interval1.min >= interval2.min && interval1.max <= interval2.max);

export const firstAnswer = (input: string[]): number => {
	const intervals: Interval[][] = input.map(lineToIntervalList);
	return intervals.filter(([interval1, interval2]) =>
		hasCompleteOverlapingInterval(interval1, interval2)
	).length;
};

// ----------------------------------------------------------------------

export const hasPartialOverlapingInterval = (
	interval1: Interval,
	interval2: Interval
) =>
	(interval2.min >= interval1.min && interval2.min <= interval1.max) ||
	(interval2.max >= interval1.min && interval2.max <= interval1.max) ||
	(interval1.min >= interval2.min && interval1.min <= interval2.max) ||
	(interval1.max >= interval2.min && interval1.max <= interval2.max);

export const secondAnswer = (input: string[]): number => {
	const intervals: Interval[][] = input.map(lineToIntervalList);
	return intervals.filter(([interval1, interval2]) =>
		hasPartialOverlapingInterval(interval1, interval2)
	).length;
};
