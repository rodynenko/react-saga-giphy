import { Reducer } from 'redux';
import { ActionType } from '../types';

type Enum<T> = {
	[key: string]: Reducer<T>
};

function createReducer<P>(initialState: P, handlers: Enum<P>): Reducer<P> {
	const reducer = (state: P = initialState, action: ActionType ) => {
		const handler = handlers[action.type];
		return handler ? handler(state, action) : state;
	};

	return reducer;
}

export default createReducer;
