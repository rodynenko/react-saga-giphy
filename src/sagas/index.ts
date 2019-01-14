import { all, fork } from 'redux-saga/effects';
import searchSaga from './search';

export default function* rootSaga() {
	yield all([
		fork(searchSaga)
	]);
}
