import update from 'immutability-helper';
import createReducer from '../utils/createReducer';
import { ActionTypes, StatusTypes } from '../store/constants';
import { GIPHYImageType, ActionHandlersType } from '../types';

export interface SearchType {
	isFetching: boolean;
	currentSearch: string;
	results: {
		[key: string]: GIPHYImageType[]
	}
};

const initialState: SearchType = {
	isFetching: false,
	currentSearch: '',
	results: { }
};

type SearchStateType = SearchType | undefined;

const actionHandlers: ActionHandlersType<SearchStateType> = {
	[ActionTypes.FETCH_GIFS + StatusTypes.START]: (state: SearchStateType) => {
		return update(state, {
			isFetching: { $set: true },
		});
	},

	[ActionTypes.FETCH_GIFS + StatusTypes.SUCCESS]: (state: SearchStateType) => {
		return update(state, {
			isFetching: { $set: false },
		});
	},

	[ActionTypes.FETCH_GIFS + StatusTypes.ERROR]: (state: SearchStateType) => {
		return update(state, {
			isFetching: { $set: false },
		});
	},
};

export default createReducer(initialState, actionHandlers);
