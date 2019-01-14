import update from 'immutability-helper';
import createReducer from '../utils/createReducer';
import { ActionTypes, StatusTypes } from '../store/constants';
import { GIPHYImageType, ActionHandlersType, ActionType } from '../types';

export interface SearchType {
	isFetching: boolean;
	currentSearch: string;
	results: {
		[key: string]: GIPHYImageType[]
	}
};

export const fetchGifs = (query: string) => ({
	type: ActionTypes.FETCH_GIFS,
	query,
});

const initialState: SearchType = {
	isFetching: false,
	currentSearch: '',
	results: { }
};

type SearchStateType = SearchType | undefined;

const actionHandlers: ActionHandlersType<SearchStateType> = {
	[ActionTypes.FETCH_GIFS]: (state: SearchStateType = initialState, action: ActionType) => {
		const { query = '' } = action;

		return update(state, {
			currentSearch: { $set: query },
			isFetching: { $set: true },
		});
	},

	[ActionTypes.FETCH_GIFS + StatusTypes.SUCCESS]: (state: SearchStateType = initialState, action: ActionType) => {
		const { currentSearch } = state;
		const list = action.payload as GIPHYImageType[];

		return update(state, {
			results: { $merge: {
				[currentSearch]: list,
			}},
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
