import { getEnum } from '../utils/getEnum';

export const ActionTypes = getEnum({
	FETCH_GIFS: null,
});

export const StatusTypes = getEnum({
	START: null,
	SUCCESS: null,
	ERROR: null,
	STOP: null,
	STOPPED: null,
});

export const API_ROOT: string = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=`;
