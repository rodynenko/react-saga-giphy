import { ActionTypes, StatusTypes } from '../store/constants';
import { GIPHYImageType } from '../types';

export const fetchGifs = (query: string, cb: () => void) => ({
	type: ActionTypes.FETCH_GIFS,
	query,
	cb
});

export const stopFetchGifs = () => ({
	type: ActionTypes.FETCH_GIFS + StatusTypes.STOP
});

export const handleSuccessFetchGifs = (payload: GIPHYImageType[], query: string) => ({
	type: ActionTypes.FETCH_GIFS + StatusTypes.SUCCESS,
	payload,
	query
});

export const handleErrorFetchGifs = (err: ErrorEvent) => ({
	type: ActionTypes.FETCH_GIFS + StatusTypes.ERROR,
	error: true,
	payload: err
});

export const handleFetchGifsStop = () => ({
	type: ActionTypes.FETCH_GIFS + StatusTypes.STOPPED
});
