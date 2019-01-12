import { css } from 'styled-components';

interface SizesType {
	[key: string]: (number | null)[];
};

interface MediaAccType {
	[key: string]: (args: any) => any;
}

interface MediaType {
	desktop: (args: any) => any;
	tablet: (args: any) => any;
	phone: (args: any) => any;
}

const sizes: SizesType = {
	desktop: [992, null],
	tablet: [768, 991],
	phone: [null, 767],
}
const ranges:string[] = ['min', 'max'];

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc: MediaAccType, label: string) => {
	const widths:string = ranges.reduce((acc: string[], range: string, index: number) => {
		if (sizes[range][index]) {
			acc.push(`(${range}-width: ${sizes[label][index]}px)`);
		}

		return acc;
	}, [])
	.join('and');

	acc[label] = (...args) => css`
		@media ${widths} {
			${css(...args)}
		}
	`

	return acc
}, {}) as MediaType;
