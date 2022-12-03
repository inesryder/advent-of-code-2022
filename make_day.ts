import { parse } from 'https://deno.land/std@0.119.0/flags/mod.ts';

const flags = parse(Deno.args, {
	string: ['day'],
});

const day: string = flags.day;

if (day) {
	const dirName = `day-${day}`;

	await Deno.mkdir(dirName);
	Deno.copyFileSync('templates/index.ts', `${dirName}/index.ts`);
	Deno.copyFileSync('templates/index.test.ts', `${dirName}/index.test.ts`);
	Deno.copyFileSync('templates/input', `${dirName}/input`);
	Deno.copyFileSync('templates/input.example', `${dirName}/input.example`);
}
