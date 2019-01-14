import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, StatusTypes, API_ROOT } from '../store/constants';
import { ActionType } from '../types';
import api from '../utils/api';

function* fetchGifs(action: ActionType) {
	const { query }  = action;
	const url = API_ROOT + query;

	try {
		const data = yield call(api.get, url);
		yield put({ type: ActionTypes.FETCH_GIFS + StatusTypes.SUCCESS, payload: data.data.data });
	} catch(err) {
		yield put({ type: ActionTypes.FETCH_GIFS + StatusTypes.ERROR, error: true, payload: err });
	}
}

function* watchFetchGifs() {
	yield takeEvery(ActionTypes.FETCH_GIFS, fetchGifs);
}

export default watchFetchGifs;
