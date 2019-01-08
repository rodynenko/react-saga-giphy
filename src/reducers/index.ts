import { combineReducers } from 'redux';
import search, { SearchType } from './search';

export interface ReduxStateType {
	search: SearchType;
}

export default combineReducers({
	search,
});
