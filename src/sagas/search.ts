import { call, put, takeEvery, take, race } from 'redux-saga/effects';
import { ActionTypes, StatusTypes, API_ROOT } from '../store/constants';
import { ActionType } from '../types';
import api from '../utils/api';

function* fetchGifs(action: ActionType) {
	const { query = '', cb }  = action;
	const url = API_ROOT + encodeURIComponent(query);

	try {
		const { resp } = yield race({
			resp: call(api.get, url),
			cancel: take(ActionTypes.FETCH_GIFS + StatusTypes.STOP)
		});

		if (cb) cb();

		if (resp) {
			yield put({
				type: ActionTypes.FETCH_GIFS + StatusTypes.SUCCESS,
				payload: resp.data.data,
				query
			});
		} else {
			yield put({ type: ActionTypes.FETCH_GIFS + StatusTypes.STOPPED });
		}

	} catch(err) {
		yield put({ type: ActionTypes.FETCH_GIFS + StatusTypes.ERROR, error: true, payload: err });
	}
}

function* watchFetchGifs() {
	yield takeEvery(ActionTypes.FETCH_GIFS, fetchGifs);
}

export default watchFetchGifs;
