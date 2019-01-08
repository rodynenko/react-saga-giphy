interface EnumType {
	[key: string]: string;
}

interface EnumSourceType {
	[key: string]: string | null;
}

function getEnum(obj: EnumSourceType): EnumType {
	const enumObj = Object.keys(obj).reduce((prev: EnumType, key: string) => {
		const value = obj[key];
		prev[key] = value || key;
		return prev;
	}, {});

	return enumObj;
}

export {
	getEnum
};
