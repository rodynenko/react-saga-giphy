import { fetchGifs } from './search';
import { ActionTypes, StatusTypes, API_ROOT } from '../store/constants';
import api from '../utils/api';
import { call, take, race } from 'redux-saga/effects';

describe('Search saga', () => {
	let gen = null;
	const query = 'search';

	beforeAll(() => {
		gen = fetchGifs({ query });
	});

	it('has to return race', () => {
		const url = API_ROOT + encodeURIComponent(query);

		expect(gen.next().value).toEqual(race({
			resp: call(api.get, url),
			cancel: take(ActionTypes.FETCH_GIFS + StatusTypes.CANCEL)
		}));
	});
});
