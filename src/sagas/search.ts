import { call, put, takeEvery, take, race } from 'redux-saga/effects';
import { ActionTypes, StatusTypes, API_ROOT } from '../store/constants';
import { ActionType } from '../types';
import api from '../utils/api';
import {
	handleSuccessFetchGifs,
	handleErrorFetchGifs,
	handleFetchGifsStop
} from '../actions/search';

function* fetchGifs(action: ActionType) {
	const { query = '', cb }  = action;
	const url = API_ROOT + encodeURIComponent(query);

	try {
		const { resp } = yield race({
			resp: call(api.get, url),
			cancel: take(ActionTypes.FETCH_GIFS + StatusTypes.CANCEL)
		});

		if (cb) cb();

		if (resp) {
			yield put(handleSuccessFetchGifs(resp.data.data, query));
		} else {
			yield put(handleFetchGifsStop());
		}

	} catch(err) {
		yield put(handleErrorFetchGifs(err));
	}
}

function* watchFetchGifs() {
	yield takeEvery(ActionTypes.FETCH_GIFS, fetchGifs);
}

export default watchFetchGifs;
