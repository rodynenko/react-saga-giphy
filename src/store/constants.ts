import { getEnum } from '../utils/getEnum';

export const ActionTypes = getEnum({
	FETCH_GIFS: null,
});

export const StatusTypes = getEnum({
	START: null,
	SUCCESS: null,
	ERROR: null,
	STOP: null,
});
