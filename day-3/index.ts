import { sum } from '../utils.ts';

const ITEM_PRIORITY =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type Rucksack = {
	compart1: string[];
	compart2: string[];
};

const rucksackFromLine = (line: string): Rucksack => {
	const items = line.split('');
	return {
		compart1: items.slice(0, items.length / 2),
		compart2: items.slice(items.length / 2),
	};
};

export const findFirstCommonItem = ([list1, list2]: string[][]) => {
	for (const item of list1) {
		if (list2.includes(item)) {
			return item;
		}
	}
	return '';
};

export const firstAnswer = (input: string[]): number => {
	const rucksacks = input.map(rucksackFromLine);
	const commonItems = rucksacks.map((rucksack) =>
		findFirstCommonItem([rucksack.compart1, rucksack.compart2])
	);
	return sum(commonItems.map((item) => ITEM_PRIORITY.indexOf(item) + 1));
};

// ----------------------------------------------------------------------

export const groupsFromRucksacks = (lists: string[][]) => {
	const groups = [];
	for (let i = 2; i < lists.length; i += 3) {
		groups.push([lists[i - 2], lists[i - 1], lists[i]]);
	}
	return groups;
};

export const findCommonItems = ([list1, list2]: string[][]) => {
	const items = [];
	for (const item of list1) {
		if (list2.includes(item)) {
			items.push(item);
		}
	}
	return items;
};

export const findCommonItemInGroup = ([list1, list2, list3]: string[][]) => {
	const commonItems = findCommonItems([list1, list2]);
	return findFirstCommonItem([commonItems, list3]);
};

export const secondAnswer = (input: string[]): number => {
	const lists = input.map((line) => line.split(''));
	const groups = groupsFromRucksacks(lists);
	const commonItems = groups.map(findCommonItemInGroup);
	return sum(commonItems.map((item) => ITEM_PRIORITY.indexOf(item) + 1));
};
